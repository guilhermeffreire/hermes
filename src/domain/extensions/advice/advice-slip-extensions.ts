import AdviceSlipModel from "@domain/model/advice/advice-slip-model";
import AdviceSlipDTO from "@domain/dto/advice/advice-slip-DTO";

class AdviceSlipExtensions {
  static toModel(backendResponse: any) {
    return new AdviceSlipModel(
      backendResponse.slip.id,
      backendResponse.slip.advice
    );
  }

  static toDto(model: AdviceSlipModel) {
    return new AdviceSlipDTO(model);
  }
}

export default AdviceSlipExtensions;
