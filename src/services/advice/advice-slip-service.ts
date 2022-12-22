import IAdviceSlip from "@core/services/advice/i-advice-slip";
import AdviceSlipDTO from "@domain/dto/advice/advice-slip-DTO";
import Api from "@transport/api";
import AdviceSlipExtensions from "@domain/extensions/advice/advice-slip-extensions";

class AdviceSlipService implements IAdviceSlip {
  static inject = ["api"] as const;

  constructor(private _apiAdvice: Api) {}

  async getAdviceSlip(requestHeaders: any): Promise<AdviceSlipDTO> {
    const apiResponse = await this._apiAdvice.getAdviceSlip();

    const model = AdviceSlipExtensions.toModel(apiResponse);

    const dto = AdviceSlipExtensions.toDto(model);

    return dto;
  }
}

export default AdviceSlipService;
