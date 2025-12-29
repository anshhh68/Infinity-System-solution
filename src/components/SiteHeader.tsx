"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Wrench, Users, MessageSquare } from "lucide-react";

export function SiteHeader() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-neutral-500 " />,
        },
        {
            name: "Services",
            link: "/services",
            icon: <Wrench className="h-4 w-4 text-neutral-500 " />,
        },
        {
            name: "About",
            link: "/about",
            icon: <Users className="h-4 w-4 text-neutral-500 " />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: <MessageSquare className="h-4 w-4 text-neutral-500 " />,
        },
    ];

    return <FloatingNav navItems={navItems} />;
}

