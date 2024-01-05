import axios from "axios";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null; // Return null to indicate that no product was fetched
  }
};

export default getProduct;
