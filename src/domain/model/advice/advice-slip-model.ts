class AdviceSlipModel {
  readonly id: number;
  readonly advice: string;

  constructor(id: number, advice: string) {
    this.id = id;
    this.advice = advice;
  }
}

export default AdviceSlipModel;
