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

// // // Addition of products in the products array;
export async function POST(request) {
  const postingData = await request.json();

  products.push(postingData); // // Pushing the BlackBerry data to the current products array;

  return NextResponse.json({
    message: "Getting data from body",
    success: true,
    bodyData: postingData,
  });
}
// // // Step:-1) Select the POST instead of GET then,
// // // Enter the url (http://localhost:3000/api/products) on POSTMAN or Thunder Client
// // // Then select the Body then JSON and Write on JSON Content format as:-
/**
 *   {
      "id": 7,
      "title": "BlackBerry",
      "price": 7860,
      "category": "Phones",
      "userRating": 9.8
    }
 */
// // // Step:-2) Then hit the send button of POSTMAN or Thunder Client.
// // // URL will be (http://localhost:3000/api/products)
// // // We will get the Status: 200 OK     Size: 142 Bytes     Time: 26 ms
// // // Getting the response as :-
/**
 * {
  "message": "Getting data from body",
  "success": true,
  "bodyData": {
    "id": 7,
    "title": "BlackBerry",
    "price": 7860,
    "category": "Phones",
    "userRating": 9.8
  }
}
 * 
 * 
 */

// // // Step:-3) Then Change the mode from POST to GET with the same URL() hit the send button of POSTMAN or Thunder Client.
// // // URL will be (http://localhost:3000/api/products)
// // // And, hit the Send button of POSTMAN or Thunder Client.
// // // We will get Status: 200 OK     Size: 637 Bytes     Time: 31 ms
/***
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
    },
    {
      "id": 7,
      "title": "BlackBerry",
      "price": 7860,
      "category": "Phones",
      "userRating": 9.8
    }
  ]
}
 * 
 * 
 * 
 */
