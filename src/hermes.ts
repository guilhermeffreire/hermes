import { ApolloServer, gql } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";

import AdviceSlipSchema from "@domain/schemas/advice/advice-slip-schema";

const loadSchema = () => {
  return buildSubgraphSchema([
    {
      typeDefs: gql`
        ${AdviceSlipSchema}
      `,
    },
  ]);
};

const buildServer = (schema: GraphQLSchema) => {
  return new ApolloServer({ schema: schema });
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
