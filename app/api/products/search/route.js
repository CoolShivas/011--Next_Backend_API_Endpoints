import { NextResponse } from "next/server";

let products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 999,
    category: "Phones",
    userRating: 4.8,
  },
  {
    id: 2,
    title: "iPhone 16 Pro",
    price: 2099,
    category: "Phones",
    userRating: 4.5,
  },
  {
    id: 3,
    title: "Dell XPS 15",
    price: 1499,
    category: "Laptops",
    userRating: 4.7,
  },
  {
    id: 4,
    title: "Canon EOS R5",
    price: 3499,
    category: "Cameras",
    userRating: 4.8,
  },
  {
    id: 5,
    title: "AirPods Pro 2",
    price: 249,
    category: "Earbuds",
    userRating: 4.7,
  },
  { id: 6, title: "LG OLED C2", price: 1599, category: "TVs", userRating: 4.9 },
];

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("query");
  const price = searchParams.get("price");
  const searchSpecificProduct = products.filter((currElem) => {
    return (
      currElem.title.toLowerCase().includes(query.toLowerCase()) &&
      currElem.price === Number(price) // Number(price) is used for strict equality operator used;
    );
  });
  if (searchSpecificProduct.length === 0) {
    return NextResponse.json({
      message: "No product match found",
      success: false,
    });
  }
  return NextResponse.json({
    message: "fetching the specific product items.",
    success: true,
    searchSpecificProduct,
  });
}
