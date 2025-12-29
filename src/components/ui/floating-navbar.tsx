"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: React.ReactNode;
    }[];
    className?: string;
}) => {
    const pathname = usePathname();

    // Check if a nav item is active
    const isActive = (link: string) => {
        if (link === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(link);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
            }}
            className={cn(
                "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent  rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-center space-x-4",
                className
            )}
        >
            {/* Brand Logo and Name */}
            <Link href="/" className="flex items-center gap-2 group pr-4 border-r border-neutral-200 ">
                <Image
                    src="/logo.png"
                    alt="Infinity System Solution"
                    width={28}
                    height={28}
                    className="transition-transform group-hover:scale-110"
                />
                <span className="hidden lg:block text-sm font-bold text-neutral-800  whitespace-nowrap">
                    Infinity System Solutions
                </span>
            </Link>

            {navItems.map((navItem, idx: number) => (
                <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className="relative px-3 py-1.5"
                >
                    {/* Animated pill background - slides between active items */}
                    {isActive(navItem.link) && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary/10 rounded-full"
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                            }}
                        />
                    )}

                    {/* Icon for mobile */}
                    <span className={cn(
                        "relative z-10 block sm:hidden transition-colors duration-200",
                        isActive(navItem.link)
                            ? "text-primary"
                            : "text-neutral-600 "
                    )}>
                        {navItem.icon}
                    </span>

                    {/* Text for desktop */}
                    <span className={cn(
                        "relative z-10 hidden sm:block text-sm font-medium transition-colors duration-200",
                        isActive(navItem.link)
                            ? "text-primary "
                            : "text-neutral-600  hover:text-neutral-500 "
                    )}>
                        {navItem.name}
                    </span>
                </Link>
            ))}

            {/* Get a Quote button */}
            <Link
                href="/contact"
                className="border text-sm font-medium relative border-neutral-200  text-black  px-4 py-2 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
            >
                <span>Get a Quote</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
            </Link>
        </motion.div>
    );
};

