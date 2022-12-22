import { gql } from "apollo-server";

const AdviceSlipSchema = gql`
  enum Language {
    BR
    US
  }

  input AdviceLanguage {
    language: Language
  }

  type AdviceSlipResult {
    id: Int
    advice: String
  }

  extend type Query {
    getAdviceSlip(input: AdviceLanguage): AdviceSlipResult
  }
`;

export default AdviceSlipSchema;
