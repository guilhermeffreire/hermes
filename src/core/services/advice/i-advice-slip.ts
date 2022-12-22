import AdviceSlipDTO from "@domain/dto/advice/advice-slip-DTO";

interface IAdviceSlip {
  getAdviceSlip(requestHeaders: any): Promise<AdviceSlipDTO>;
}

export default IAdviceSlip;
