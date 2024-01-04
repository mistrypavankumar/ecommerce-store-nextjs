import React, { useState, useEffect } from "react";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { Billboard as BillboardType, Product } from "@/types";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboardData = await getBillboard(
    "77877773-0c93-445b-8450-b393e919608c"
  );

  const productsData = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboardData && <Billboard data={billboardData} />}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={productsData} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
