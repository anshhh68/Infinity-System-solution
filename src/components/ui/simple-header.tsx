'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';
import { cn } from '@/lib/utils';

export function SimpleHeader() {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();

    const links = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Services',
            href: '/services',
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
            <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Infinity System Solution Logo"
                        width={36}
                        height={36}
                        className="transition-transform group-hover:scale-110"
                    />
                    <p className="text-lg font-bold tracking-tight">Infinity System Solutions</p>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            className={cn(
                                buttonVariants({ variant: 'ghost' }),
                                isActive(link.href) && 'bg-accent text-accent-foreground font-semibold'
                            )}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="ml-4 flex items-center gap-2">
                        <Button variant="outline">Sign In</Button>
                        <Button>Get a Quote</Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <Button size="icon" variant="outline" className="lg:hidden">
                        <MenuToggle
                            strokeWidth={2.5}
                            open={open}
                            onOpenChange={setOpen}
                            className="size-6"
                        />
                    </Button>
                    <SheetContent
                        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                        showClose={false}
                        side="left"
                    >
                        {/* Mobile Logo */}
                        <div className="flex items-center gap-2 px-4 pt-6 pb-4 border-b">
                            <Image
                                src="/logo.png"
                                alt="Infinity System Solution Logo"
                                width={28}
                                height={28}
                            />
                            <p className="text-lg font-bold">Infinity System Solutions</p>
                        </div>

                        {/* Mobile Links */}
                        <div className="grid gap-y-1 overflow-y-auto px-4 pt-6 pb-5">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: isActive(link.href) ? 'secondary' : 'ghost',
                                            className: 'justify-start h-12 text-base',
                                        })
                                    )}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Footer */}
                        <SheetFooter>
                            <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                                Sign In
                            </Button>
                            <Button className="w-full" onClick={() => setOpen(false)}>
                                Get a Quote
                            </Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
