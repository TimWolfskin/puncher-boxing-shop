import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import myConfiguredSanityClient from 'next-sanity'
import { fetchNewProducts } from "../utils/fetchNewProducts";
import type { GetServerSideProps } from "next";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



interface Props {
  newProduct: NewProduct;
}

function NewProduct({ newProduct }: Props) {
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
          {/* <Image
            src={urlFor(newProduct.image[0]).url()}
            alt=""
            layout="fill"
            objectFit="contain"
          /> */}
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{newProduct.title}</p>
          <p>{newProduct.price}</p>
        </div>
        <div className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-black">
              <ShoppingCartOutlinedIcon className="h-8 w-8 text-white" />
            </div>
      </div>
    </div>
  );
}

export default NewProduct;
