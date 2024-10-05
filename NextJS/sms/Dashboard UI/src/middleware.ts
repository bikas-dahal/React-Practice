import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
    matcher: createRouteMatcher([route]),
    allowedRoles: routeAccessMap[route]
}))

// console.log(matchers);


const isProtectedRoute = createRouteMatcher(['/admin', '/teacher'])

export default clerkMiddleware((auth, req) => {
    // if (isProtectedRoute(req)) auth().protect()

    const { sessionClaims } = auth()

    // console.log(sessionClaims);
    const role = (sessionClaims?.metadata as { role: string})?.role

    for ( const { matcher, allowedRoles} of matchers) {
        if (matcher(req) && !allowedRoles.includes(role)) {
            return NextResponse.redirect(new URL(`/${role}`, req.url))
        }
    }
});



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};