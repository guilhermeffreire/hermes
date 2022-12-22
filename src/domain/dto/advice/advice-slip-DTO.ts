import AdviceSlipModel from "@domain/model/advice/advice-slip-model";

class AdviceSlipDTO {
  readonly id: number;
  readonly advice: string;

  constructor(model: AdviceSlipModel) {
    this.id = model.id;
    this.advice = model.advice;
  }
}

export default AdviceSlipDTO;
