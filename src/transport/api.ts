import axios, { AxiosResponse } from "axios";

export default class Api {
  async getAdviceSlip(): Promise<AxiosResponse> {
    const apiResponse = await axios.get("https://api.adviceslip.com/advice");

    return apiResponse;
  }
}
