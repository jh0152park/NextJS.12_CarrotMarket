import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
    console.log("it works! global middleware");
    if (request.nextUrl.pathname.startsWith("/chats")) {
        console.log("chat only middleware");
    }
}
