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

//////////********************************************************************* *////////////
//////////********************************************************************* *////////////
//////////********************************************************************* *////////////

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

//////////********************************************************************* *////////////
//////////********************************************************************* *////////////
//////////********************************************************************* *////////////

// // // Updation or Edition in the product/item in the products array;
export async function PUT(request) {
  const { searchParams } = request.nextUrl;

  const id = searchParams.get("id");

  const updatedProduct = await request.json();

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(id)) {
      products[i].title = updatedProduct.title;
      products[i].price = updatedProduct.price;
      products[i].category = updatedProduct.category;
      products[i].userRating = updatedProduct.userRating;
    }
  }

  return NextResponse.json({
    message: "Your product details are updated successfully...!",
    success: true,
    products,
  });
}
// // // Step:-1) Select the PUT then,
// // // Enter the url (http://localhost:3000/api/products?id=6) on POSTMAN or Thunder Client
// // // Select the body and enter the data such as  { id: 6, title: "LG OLED C2", price: 1599, category: "TVs", userRating: 4.9 },
// // // Then do the correction or updation such as
/**
 * {
      "id": 6,
      "title": "Life Good",
      "price": 5001,
      "category": "Television",
      "userRating": 9.8
    }
 * 
 * 
 */
// // // We will get the Status: 200 OK     Size: 149 Bytes     Time: 33 ms
/**
 * {
  {
  "message": "Your product details are updated successfully...!",
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
      "title": "BerryHoney",
      "price": 10000,
      "category": "Phones",
      "userRating": 5.8
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
      "title": "Life Good",
      "price": 5001,
      "category": "Television",
      "userRating": 9.8
    },
    {
      "id": 7,
      "title": "BlackBerry",
      "price": 10089,
      "category": "Phones",
      "userRating": 7.8
    },
    {
      "id": 8,
      "title": "lavaMicroMax",
      "price": 50012,
      "category": "Phones",
      "userRating": 7.8
    }
  ]
}
 * 
 * 
 */

//////////********************************************************************* *////////////
//////////********************************************************************* *////////////
//////////********************************************************************* *////////////

// // // Deletion or removal of the product/item from the products array;

export async function DELETE(request) {
  const { searchParams } = request.nextUrl;

  const id = searchParams.get("id");

  products = products.filter((cur) => {
    return cur.id !== parseInt(id);
  });

  return NextResponse.json({
    message: "Deleted the product item successfully...!",
    success: true,
    products,
  });
}
// // // Step:-1) Select the DELETE then,
// // // Enter the url (http://localhost:3000/api/products?id=1) on POSTMAN or Thunder Client
// // // Hit the send button you will get the result as :-
// // // We will get the Status: 200 OK     Size: 149 Bytes     Time: 33 ms
/**
 * {
  "message": "Deleted the product item successfully...!",
  "success": true,
  "products": [
     {
      "id": 2,
      "title": "iPhone 16 Pro",
      "price": 2099,
      "category": "Phones",
      "userRating": 4.5
    },
    {
      "id": 3,
      "title": "BerryHoney",
      "price": 10000,
      "category": "Phones",
      "userRating": 5.8
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
      "title": "Life Good",
      "price": 5001,
      "category": "Television",
      "userRating": 9.8
    },
    {
      "id": 7,
      "title": "BlackBerry",
      "price": 10089,
      "category": "Phones",
      "userRating": 7.8
    },
    {
      "id": 8,
      "title": "lavaMicroMax",
      "price": 50012,
      "category": "Phones",
      "userRating": 7.8
    }
  ]
}
 * 
 */
