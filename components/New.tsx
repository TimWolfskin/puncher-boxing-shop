import React from "react";
import { Tab } from "@headlessui/react";
// import { GetServerSideProps } from "next";
// import { fetchCategories } from "../utils/fetchCategories";

interface Props {
  categories: Category[];
  newProducts: NewProduct[]
}

const New = ({ categories, newProducts }: Props) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold tracking-wide text-[#333] mb-12">
        New Products
      </h1>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {categories.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-normal outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? " bg-[#35383C] text-white"
                    : "border-b-2 border-[#35383C] text-[#333]"
                }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
          <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default New;
