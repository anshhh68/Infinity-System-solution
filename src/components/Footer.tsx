import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-background border-t pt-16 pb-8">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="max-w-[1280px] w-full flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="Infinity System Solution Logo"
                                    width={32}
                                    height={32}
                                />
                                <h2 className="text-lg font-bold">Infinity System Solutions</h2>
                            </Link>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Your all-in-one partner for IT sales and service. Bridging the gap with quality, affordability, and trust.
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">public</span>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">rss_feed</span>
                                </a>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm uppercase tracking-wider">Services</h3>
                            <Link href="/services#cctv" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                CCTV Installation
                            </Link>
                            <Link href="/services#hardware" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Hardware Sales
                            </Link>
                            <Link href="/services#repair" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Device Repair
                            </Link>
                            <Link href="/services#data" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Data Recovery
                            </Link>
                        </div>

                        {/* Company Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm uppercase tracking-wider">Company</h3>
                            <Link href="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Careers
                            </a>
                            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                        </div>

                        {/* Contact Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-sm uppercase tracking-wider">Contact</h3>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">local_shipping</span>
                                <span className="text-muted-foreground text-sm">Door to Door Service available in Vadodara & surrounding areas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">call</span>
                                <a href="tel:+917405787727" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 74057 87727</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                <a href="mailto:infinitysystemsolution@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">infinitysystemsolution@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground text-xs">
                            © {new Date().getFullYear()} Infinity System Solution. All rights reserved.
                        </p>
                        <p className="text-muted-foreground text-xs flex items-center gap-1">
                            Designed with <span className="material-symbols-outlined text-[10px] text-red-400">favorite</span> for IT Excellence.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
