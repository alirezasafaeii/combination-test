import axios from "axios";

axios.defaults.baseURL = "https://randomuser.me/api";

export const apiClient = axios;

export const handle = async <T>(req: Promise<T>): Promise<T> => {
  try {
    const response: any = await req;
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
}