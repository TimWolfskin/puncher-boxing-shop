export const fetchNewProducts = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getNewProducts`
    );
  
    const data = await res.json();
    const newProducts: NewProduct[] = data.newProducts;
  
    return newProducts;
  };