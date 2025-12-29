"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import {
    Settings2,
    Command,
    Plus,
    Shield,
    Cpu,
    Wrench,
    Database,
    Clock,
    Users,
} from "lucide-react";
import Image from "next/image";

// --- Custom Card Components for Infinity System Solution ---

const CCTVCard = () => (
    <Card className="flex h-full flex-col">
        <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 ">
                <Shield className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>CCTV & Security</CardTitle>
            <CardDescription>
                Complete surveillance solutions with HD cameras, remote monitoring, and 24/7 recording capabilities. Keep your premises secure with our professional installation.
            </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex items-center justify-between">
            <Button variant="outline" size="sm">
                <Settings2 className="mr-2 h-4 w-4" />
                Configure
            </Button>
            <Switch
                className="data-[state=checked]:bg-primary"
                aria-label="Toggle security"
                defaultChecked
            />
        </CardFooter>
    </Card>
);

const ClientsCard = () => (
    <Card className="h-full">
        <CardContent className="flex h-full flex-col justify-between p-6">
            <div>
                <CardTitle className="text-base font-medium">
                    Happy Clients
                </CardTitle>
                <CardDescription>500+ businesses served</CardDescription>
            </div>
            <div className="flex -space-x-2 overflow-hidden">
                <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                    alt="Client 1"
                    width={32}
                    height={32}
                />
                <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                    alt="Client 2"
                    width={32}
                    height={32}
                />
                <Image
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Client 3"
                    width={32}
                    height={32}
                />
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-background bg-primary text-primary-foreground text-xs font-bold">
                    +497
                </div>
            </div>
        </CardContent>
    </Card>
);

const ResponseTimeCard = () => (
    <Card className="h-full">
        <CardContent className="flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between">
                <div>
                    <CardTitle className="text-base font-medium">Response Time</CardTitle>
                    <CardDescription>Average Resolution</CardDescription>
                </div>
                <Badge variant="outline" className="border-green-300 text-green-600">
                    Excellent
                </Badge>
            </div>
            <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-primary">&lt;2</span>
                <span className="text-2xl font-medium text-muted-foreground mb-1">hours</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
                <span>Emergency Support</span>
                <span>24/7 Available</span>
            </div>
        </CardContent>
    </Card>
);

const SatisfactionCard = () => (
    <Card className="relative h-full w-full overflow-hidden">
        {/* Dotted background */}
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
            }}
        />
        <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6">
            <span className="text-7xl font-bold text-primary">100%</span>
            <span className="text-sm text-muted-foreground mt-2">Customer Satisfaction</span>
        </CardContent>
    </Card>
);

const HardwareCard = () => (
    <Card className="h-full">
        <CardContent className="flex h-full flex-col justify-between p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100  mb-3">
                <Cpu className="h-5 w-5 text-orange-600" />
            </div>
            <div>
                <CardTitle className="text-base font-medium">
                    Hardware Solutions
                </CardTitle>
                <CardDescription>
                    Premium laptops, desktops & servers from Dell, HP, Lenovo at the best market prices.
                </CardDescription>
            </div>
        </CardContent>
    </Card>
);

const SupportCard = () => (
    <Card className="h-full">
        <CardContent className="flex h-full flex-wrap items-center justify-between gap-4 p-6">
            <div>
                <CardTitle className="text-base font-medium">Quick Support Access</CardTitle>
                <CardDescription>
                    Fast & easy way to reach our technical team.
                </CardDescription>
            </div>
            <div className="flex items-center gap-2">
                {/* Keyboard shortcuts styled */}
                <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground">
                    <Command className="h-3.5 w-3.5" />
                </div>
                <Plus className="h-3 w-3 text-muted-foreground" />
                <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background font-mono text-xs font-medium text-muted-foreground">
                    H
                </div>
                <span className="text-xs text-muted-foreground ml-2">for Help</span>
            </div>
        </CardContent>
    </Card>
);

// --- The Demo Component ---
export default function BentoFeaturesSection() {
    return (
        <section className="w-full bg-muted/30 py-16 md:py-24">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="max-w-[1280px] w-full">
                    <div className="mb-12 text-center">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Complete IT Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
                            Everything you need for your business technology infrastructure,
                            organized and optimized for maximum efficiency.
                        </p>
                    </div>

                    <BentoGridShowcase
                        integration={<CCTVCard />}
                        trackers={<ClientsCard />}
                        statistic={<SatisfactionCard />}
                        focus={<ResponseTimeCard />}
                        productivity={<HardwareCard />}
                        shortcuts={<SupportCard />}
                    />
                </div>
            </div>
        </section>
    );
}

