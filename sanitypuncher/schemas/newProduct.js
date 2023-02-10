export default {
    name: "newproduct",
    title: "New Product",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "image",
        title: "Image",
        type: "array",
        of: [{ type: "image" }],
        options: {
          hotspot: true,
        },
      },
      {
        title: 'Size',
        name: 'size',
        type: 'number'
      },
      {
        title: 'Clothes Size',
        name: 'clothessize',
        type: 'string'
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "description",
        title: "Description",
        type: "blockContent",
      },
    ],
  };