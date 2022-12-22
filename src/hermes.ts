import { ApolloServer, gql } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";
import lodash from "lodash";

import AdviceSlipSchema from "@domain/schemas/advice/advice-slip-schema";
import AdviceSlipResolver from "@resolvers/advice/advice-slip-resolver";
import dependenciesContainer from "@infrastructure/DI/dependencies-container";

const loadSchema = () => {
  return buildSubgraphSchema([
    {
      typeDefs: gql`
        ${AdviceSlipSchema}
      `,
      resolvers: lodash.merge(AdviceSlipResolver),
    },
  ]);
};

const buildServer = (schema: GraphQLSchema) => {
  return new ApolloServer({
    schema: schema,
    context: ({}) => ({
      AdviceSlipService:
        dependenciesContainer.services.AdviceSlipService.resolve(
          "adviceSlipService"
        ),
    }),
  });
};

const runServer = async () => {
  const schema = loadSchema();
  const server = buildServer(schema);
  const port = 4000;

  server.listen({ port }).then(({ url }) => {
    console.log(`Server is now running on ${url}`);
  });
};

const main = async () => {
  await runServer();
};

main().then();
