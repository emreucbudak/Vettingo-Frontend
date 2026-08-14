import { decodeJwt } from "jose";
import { NextRequest, NextResponse } from "next/server";
interface User {
    role:string
    exp: number
}
export async function proxy(request:NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = request.cookies.get("access_token")?.value;
    if(token === undefined) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.rewrite(url);
    }
    else {
        if(pathname.startsWith("/employer")){
        const claim =  decodeJwt(token) as User;
        const expire = Date.now() >= claim.exp *1000;
        if(claim.role !== "employer" ||  expire === true) {
             return NextResponse.redirect(new URL("/login", request.url));
        }
         return NextResponse.next();
    }
    if(pathname.startsWith("/candidate")) {
        const claim = await decodeJwt(token) as User;
        const expire = Date.now() >= claim.exp *1000;
        if (claim.role!== "candidate" || expire === true) {
             return NextResponse.redirect(new URL("/login", request.url));
        }
         return NextResponse.next();

    }
    }

}
export const config = {
    matcher: ['/employer/:path*','/candidate/:path*']
}