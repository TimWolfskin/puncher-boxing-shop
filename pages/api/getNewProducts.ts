
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "newproduct"] {
_id,
  ...
} | order(_createdAt asc)`;

type Data = {
    newProducts: NewProduct[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const newProducts: NewProduct[] = await sanityClient.fetch(query);
  res.status(200).json({ newProducts });
}