import axios from "axios";
import { Billboard, Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard[]> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch billboards:", error);
    return [];
  }
};

export default getBillboard;
