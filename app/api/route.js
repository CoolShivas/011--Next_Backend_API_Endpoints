import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Welcome to Next.js backend.",
    success: true,
  });
}
// // // Now, install the Thunder Client in the VS Code Extension to see the result;
// // // Open the Thunder Client and make a new request and enter the url (http://localhost:3000/api) and hit the send button.
// // // You will get the response as (Status: 200 OK   Size: 41 Bytes    Time: 4.98 s) and below this
// // // {
// // //    "message": "Welcome to Next.js backend."
// // //    "success": true
// // // }
// // //
// // //
