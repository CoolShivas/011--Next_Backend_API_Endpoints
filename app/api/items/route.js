import { NextResponse } from "next/server";

// // // Fetching the specific or individual items by query search;
// // // Such as url(http://localhost:3000/api/items?query=iphone) or
// // // or want to search more like phone + price and features and all then your url should be (http://localhost:3000/api/items?query=iphone&price=999)
export async function GET(request) {
  const { searchParams } = request.nextUrl;
  console.log("searchParams result = ", searchParams);
  // // // If you enter the url (http://localhost:3000/api/products/catlog?query=mobile&feature=40 mega px camera) on POSTMAN or Thunder Client then you will get the Output on Terminal if request is successful;
  // // // On Terminal we are getting the Output as :-
  // // // searchParams result =  URLSearchParams { 'query' => 'mobile', 'feature' => '40 mega px camera' }
  return NextResponse.json({ message: "query string", success: true });
}
// // // And, on POSTMAN we are getting the Output as :-
// // // {
// // // "message": "query string"
// // // "success": true
// // // }
