import { createInjector } from "typed-inject";
import Api from "@transport/api";
import AdviceSlipService from "@services/advice/advice-slip-service";

const dependenciesContainer = {
  services: {
    AdviceSlipService: createInjector()
      .provideClass("api", Api)
      .provideClass("adviceSlipService", AdviceSlipService),
  },
};

export default { ...dependenciesContainer };
