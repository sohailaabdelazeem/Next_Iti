
import { NextResponse ,NextRequest} from "next/server";
import { auth } from "./service/auth";
// export const middleware = auth;
export function middleware(request:Request) {
  return NextResponse.redirect(new URL('/home',request.url))
        // const {pathname}=request.nextUrl;
        // switch(pathname){
        //     case '/login':
        //     case '/signup':
        //     case '/products':
        //         return auth;
        //     case'/account':
        //         return NextResponse.redirect(new URL('/',request.url));
        //     default:
        //         return NextResponse.next();
    
}
export const config = {
    matcher:'/'
    // matcher:['/login','/signup','/products','/account']
};