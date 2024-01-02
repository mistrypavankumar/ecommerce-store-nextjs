"use client";

import React, { useState, useEffect } from "react";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { Billboard as BillboardType, Product } from "@/types";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

function HomePage() {
  const [billboard, setBillboard] = useState<BillboardType[]>();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const billboardData = await getBillboard(
        "77877773-0c93-445b-8450-b393e919608c"
      );

      const productsData = await getProducts({ isFeatured: true });

      if (billboardData) {
        setBillboard(billboardData);
      }

      if (productsData) {
        setProducts(productsData);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboard && <Billboard data={billboard} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
