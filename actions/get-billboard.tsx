import axios from "axios";
import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch billboards:", error);
    return null;
  }
};

export default getBillboard;
