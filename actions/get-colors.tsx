import axios from "axios";
import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch color:", error);
    return [];
  }
};

export default getColors;
