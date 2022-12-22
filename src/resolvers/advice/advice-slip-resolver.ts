import { AdviceSlipResult, Resolvers } from "@domain/generated";

const AdviceSlipResolver: Resolvers = {
  Query: {
    getAdviceSlip: async (__, _, context): Promise<AdviceSlipResult> => {
      return context.AdviceSlipService.getAdviceSlip(context);
    },
  },
};

export default AdviceSlipResolver;
