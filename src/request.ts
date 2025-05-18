import axios from "axios";

const localHost: string = "192.168.1.1:8001";

export async function login(id: string, password: string) {
  try {
    const input = { id: id, password: password };
    const response = await axios.post(
      localHost + "/your-backend-endpoint",
      input
    );
    return response.data;
    //后端处理后继续
  } catch (error) {
    return {
      status: "error",
      message: "网络异常",
    };
  }
}
