import { NextRequest } from "next/server";
export function proxy(request:NextRequest) {
    const pathname = request.nextUrl.pathname;
    if(pathname.startsWith("/employer")){
        var token = getAuthToken();
  
    }

}
export const config = {
    matcher: ['employer/:path*','candidate/:path*']
}