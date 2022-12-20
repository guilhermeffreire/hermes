import { gql } from "apollo-server";

const AdviceSlipSchema = gql`
  type AdviceSlipResult {
    id: Int
    advice: String
  }

  extend type Query {
    getAdviceSlip: AdviceSlipResult
  }
`;

export default AdviceSlipSchema;
