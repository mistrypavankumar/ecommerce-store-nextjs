import axios from "axios";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product[]> => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export default getProduct;
