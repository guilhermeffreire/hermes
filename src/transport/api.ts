import axios, { AxiosResponse } from "axios";

class Api {
  async getAdviceSlip(): Promise<AxiosResponse> {
    const apiResponse = await axios.get("https://api.adviceslip.com/advice");

    return apiResponse.data;
  }
}

export default Api;
