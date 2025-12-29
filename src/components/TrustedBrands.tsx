"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Brand logos using SimpleIcons CDN (reliable and free)
// For brands not on SimpleIcons, use colored text logos as fallback
const brands = [
    // Computer/IT brands - SimpleIcons CDN
    { name: "Dell", logo: "https://cdn.simpleicons.org/dell", hasLogo: true },
    { name: "HP", logo: "https://cdn.simpleicons.org/hp", hasLogo: true },
    { name: "Lenovo", logo: "https://cdn.simpleicons.org/lenovo", hasLogo: true },
    { name: "Acer", logo: "https://cdn.simpleicons.org/acer", hasLogo: true },
    { name: "Intel", logo: "https://cdn.simpleicons.org/intel", hasLogo: true },
    { name: "Microsoft", logo: "/microsoft.jpg", hasLogo: true },
    { name: "Asus", logo: "https://cdn.simpleicons.org/asus", hasLogo: true },
    { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung", hasLogo: true },
    // CCTV brands - text based (not on SimpleIcons)
    { name: "CP Plus", logo: "", hasLogo: false, color: "#00A651" },
    { name: "Dahua", logo: "", hasLogo: false, color: "#E31E24" },
    { name: "Hikvision", logo: "", hasLogo: false, color: "#E31E24" },
];

export default function TrustedBrands() {
    return (
        <section className="w-full bg-background py-12 overflow-hidden border-y border-border">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center mb-8">
                <div className="max-w-[1280px] w-full text-center">
                    <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                        Trusted Partner Brands
                    </p>
                </div>
            </div>

            {/* Infinite scrolling logos */}
            <div className="relative">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center"
                        animate={{
                            x: [0, -2000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <div
                                key={`brand-1-${index}`}
                                className="flex-shrink-0 px-6 py-3"
                            >
                                {brand.hasLogo ? (
                                    <div className="relative h-20 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            fill
                                            className="object-contain "
                                            unoptimized
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                                    >
                                        <span
                                            className="text-2xl font-bold whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
                                            style={{ color: brand.color }}
                                        >
                                            {brand.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {brands.map((brand, index) => (
                            <div
                                key={`brand-2-${index}`}
                                className="flex-shrink-0 px-6 py-3"
                            >
                                {brand.hasLogo ? (
                                    <div className="relative h-20 w-48 opacity-50 hover:opacity-100 transition-all duration-300">
                                        <Image
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            fill
                                            className="object-contain "
                                            unoptimized
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                                    >
                                        <span
                                            className="text-2xl font-bold whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
                                            style={{ color: brand.color }}
                                        >
                                            {brand.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}

