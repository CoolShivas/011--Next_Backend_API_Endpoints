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

export async function GET(req) {
  return NextResponse.json({
    message: "Fetching all the products",
    success: true,
    products,
  });
}
// // // Now, install the Thunder Client in the VS Code Extension to see the result;
// // // Open the Thunder Client and make a new request and enter the url (http://localhost:3000/api) and hit the send button.
// // // You will get the response as (Status: 200 OK   Size: 41 Bytes    Time: 4.98 s) and below this
/****
 * 
 * {
  "message": "Fetching all the products",
  "success": true,
  "products": [
    {
      "id": 1,
      "title": "iPhone 15 Pro",
      "price": 999,
      "category": "Phones",
      "userRating": 4.8
    },
    {
      "id": 2,
      "title": "iPhone 16 Pro",
      "price": 2099,
      "category": "Phones",
      "userRating": 4.5
    },
    {
      "id": 3,
      "title": "Dell XPS 15",
      "price": 1499,
      "category": "Laptops",
      "userRating": 4.7
    },
    {
      "id": 4,
      "title": "Canon EOS R5",
      "price": 3499,
      "category": "Cameras",
      "userRating": 4.8
    },
    {
      "id": 5,
      "title": "AirPods Pro 2",
      "price": 249,
      "category": "Earbuds",
      "userRating": 4.7
    },
    {
      "id": 6,
      "title": "LG OLED C2",
      "price": 1599,
      "category": "TVs",
      "userRating": 4.9
    }
  ]
}
 * 
 * 
 * 
 */
