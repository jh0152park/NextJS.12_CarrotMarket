import { NextResponse } from "next/server";
import { NextRequest, NextFetchEvent, userAgent } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
    console.log("it works! global middleware");

    if (userAgent(request).isBot) {
        return new Response("Please don't be a bot. Be human.", {
            status: 403,
        });
    }

    if (
        !request.url.includes("/api") &&
        !request.url.includes("/enter") &&
        !request.cookies.has("carrotsession")
    ) {
        return NextResponse.redirect("/enter");
    }

    if (request.nextUrl.pathname.startsWith("/chats")) {
        console.log("chat only middleware");
    }
}
