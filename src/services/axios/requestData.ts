import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type RequestDataParams = {
  method?: string;
  url?: string;
  data?: any;
}

export const requestData = ({
  method,
  url,
  data,
}: RequestDataParams): Promise<AxiosResponse> => {
  const apiUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";
  const requestDataConfig: AxiosRequestConfig = {
    method: method || "GET",
    baseURL: apiUrl,
    url: url || "",
    data: data ? { ...data } : undefined, 
  };
  return axios(requestDataConfig);
};
