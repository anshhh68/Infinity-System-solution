import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Infinity System Solution - your trusted IT partner. We bridge the gap between sales and service with 100% customer satisfaction.",
};

export default function AboutPage() {
    const features = [
        {
            icon: "savings",
            title: "Best Price Guarantee",
            description:
                "We offer the most competitive pricing in the market for all your IT hardware needs. We believe high quality shouldn't come with a prohibitive price tag, ensuring affordability without compromise.",
        },
        {
            icon: "bolt",
            title: "Reliability & Speed",
            description:
                "Time is money. Our skilled technicians are dedicated to quick turnaround times, minimizing downtime so your operations can continue without interruption. Fast, efficient, and reliable.",
        },
        {
            icon: "handshake",
            title: "Trust & Support",
            description:
                "We don't just sell; we support. We build long-term relationships through excellent after-sales support and a commitment to 100% customer satisfaction. Your trust is our most valuable asset.",
        },
    ];

    const checklistItems = [
        "Certified Technicians",
        "End-to-End Solutions",
        "24/7 Monitoring Available",
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="w-full flex justify-center py-12 md:py-20 bg-[#f6f6f8] dark:bg-[#101622]">
                <div className="w-full max-w-[1280px] px-4 md:px-10">
                    <div className="flex flex-col gap-10 md:gap-16 lg:flex-row items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6 lg:w-1/2 justify-center animate-fadeIn">
                            <div className="flex flex-col gap-4 text-left">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#135bec]/20 bg-[#135bec]/5 px-3 py-1">
                                    <span className="text-xs font-bold uppercase tracking-wide text-[#135bec]">
                                        About Us
                                    </span>
                                </div>
                                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                                    Bridging the Gap Between Sales & Service
                                </h1>
                                <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed">
                                    We are your all-in-one IT Service Provider dedicated to top-tier
                                    hardware and security services. Infinity System Solution ensures
                                    your technology empowers your business, not hinders it.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="flex h-12 min-w-[140px] cursor-pointer items-center justify-center rounded-lg bg-[#135bec] hover:bg-blue-700 px-6 text-white text-base font-bold transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/services"
                                    className="flex h-12 min-w-[140px] cursor-pointer items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-6 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-base font-bold transition-all"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 w-full animate-slideInRight">
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3cxRqvHUmUv1h8yx9BeNdKOKnKZXHmg-_Ygv0snB4epKV8j3mGQD3cK0TazvjM6EffAvh_YZgtkD2KMgvP4Vow2ldVsTCsRGHi3qz-1OhbdAW5fBpSH66gN83nWz3XvVHTSWIrDEdQz97PBAjVBQ1XbEJGhtFDQ2BIn_sEGH9N_sn4KtyDyUntYTnhMhFGxWof8ZizwGNCkUGUSsu8HZ2A_B0WmnHiDGZqz4Dl7POqgp2kwFHc-nzvYMcaiJsKqnS48XsiTIoS1A"
                                    alt="Professional IT technicians working on server rack infrastructure"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuCuelI6x1dlWSTILOSz0LDRenw95eGj-jVYdKgVQJMgeqH2epiwDZrKC_WtomtKzG_dC04Jw0b5xVe6_bpJ53lGlRBXGaTNE753G31H7D_J_I9ZGRAO0xCK76anbAONE2jK5vaNwqJolRSgLACf4wCKUzKZyuTj22qsKoysiKCs4KrEiXAh2Fl0yCBfFwFQZo5BL8Ia4OOjIkra4OL-ndrt-xeaFKUVrMycU2Ny_sUmbicElOjit_kIQuouyqs7b5vXBNjQDdSkgUA",
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Uu5zeMKTucqMq5WwWQDm_lzMtfKa8kJthAfwZHg3CDloEJmmJG2tY15Zur_MA_u1L5FzlmEJeH4TCVVBjoFlA906ld2X4zJEzD5yMwdhuKV0W4TDGIGnO_wQtPwteI8nZytmY8hf2q54k_oJrgEP9b1RQBGQd_IoWRYTlIgn4EuXaExZLtqbR15n_nzljTUKR_DfiQq04LKy1IDk-98yvzH_-eRUhi5VBdAeqQ7d5HWgTAfXtizDehVT-eKWrcZpITPWKUffISQ",
                                                "https://lh3.googleusercontent.com/aida-public/AB6AXuBj-eZsQ2yu4-U_FBczirVx37gT246U4AWZSsxjs2xJIbx3V_ryLsvjz8n-zkQJKVXwPrSf4iDdXbvK1jmMIWU7PsLH6pPlYUAkvnpe_OEcnKMMC2OtosPP42RR8b1f8MFg426blmVGoL4c_xeahv4rrju4qsLrvTWaYpWRHtflzbnXPDtZmAj_GVPTlsWMUKLb0FhaY4EE7UAKFT62n9W1I34gQG6xR-LTIFKoh3OSQNRcLz4ZlOh6PGpsefsxmkhFeFcstE1TLqE",
                                            ].map((src, index) => (
                                                <div
                                                    key={index}
                                                    className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 relative overflow-hidden"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Team member ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                                                Expert Team
                                            </span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                Certified & Ready to Help
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-10">
                <div className="flex justify-center">
                    <div className="w-full max-w-[1280px] px-4 md:px-10">
                        <div className="flex flex-wrap gap-8 justify-around items-center text-center">
                            {[
                                { value: "100%", label: "Customer Satisfaction" },
                                { value: "24/7", label: "Support Availability" },
                                { value: "500+", label: "Projects Completed" },
                                { value: "10+", label: "Years of Experience" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1 items-center animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className="text-4xl font-black text-[#135bec] tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        {stat.label}
                                    </span>
                                    {index < 3 && (
                                        <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden md:block absolute right-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="w-full py-16 md:py-24 bg-[#f6f6f8] dark:bg-[#101622] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#135bec]/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl" />

                <div className="flex justify-center relative z-10">
                    <div className="w-full max-w-[960px] px-4 md:px-10 text-center animate-fadeIn">
                        <span className="text-[#135bec] font-bold tracking-widest uppercase text-sm mb-3 block">
                            Our Mission
                        </span>
                        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Empowering Business Through Technology
                        </h2>
                        <p className="text-slate-500 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            At Infinity System Solution, we believe that robust IT infrastructure
                            is the backbone of any successful modern enterprise. Our mission is to
                            provide complete, end-to-end technology solutions that are not only
                            reliable but also cost-effective. We strive to be more than just a
                            vendor; we are your strategic partner in growth, ensuring your hardware
                            and security needs are met with precision and foresight.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-900">
                <div className="flex justify-center">
                    <div className="w-full max-w-[1280px] px-4 md:px-10 flex flex-col items-center">
                        <div className="flex flex-col gap-4 mb-12 text-center max-w-[720px] animate-fadeIn">
                            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                                Why Choose Infinity System Solution?
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                                We stand by our core pillars of service to ensure your business
                                technology runs smoothly and efficiently.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f6f6f8] dark:bg-slate-800/50 p-8 hover:shadow-lg hover:border-[#135bec]/30 transition-all duration-300 group card-hover animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-[#135bec]/10 flex items-center justify-center text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-[32px]">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Values Visual Section */}
            <section className="w-full py-16 md:py-24 bg-[#f6f6f8] dark:bg-[#101622]">
                <div className="flex justify-center">
                    <div className="w-full max-w-[1280px] px-4 md:px-10">
                        <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center gap-8 animate-slideInLeft">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                        Dedicated to Excellence
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                                        Our team consists of certified experts passionate about
                                        technology. From complex server migrations to simple hardware
                                        upgrades, we handle every task with the same level of
                                        professionalism and care. We are committed to bridging the gap
                                        between sales and service.
                                    </p>
                                </div>
                                <ul className="flex flex-col gap-4">
                                    {checklistItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 animate-fadeIn"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <span className="material-symbols-outlined text-[#135bec]">
                                                check_circle
                                            </span>
                                            <span className="text-slate-900 dark:text-slate-200 font-medium">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2 min-h-[300px] relative animate-slideInRight">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCEwMJlua-nrkQrnvZOCEmyAjF-8Tz7_iLGqkVgxa_QXiXApPbFBnFopFPy6H3fvy6m13tOuud9BZYpN-34Vqgw2FBP9_atSlX_Xk3XSDRBWWGTJ-2XuOA8l3ON-BI5x42mlMrOX3II5VGu-4a6y0H8kTJqLF_iINMwC2u6tUD0oDLg6xhsBcCZi6LTP3yejpkS5x32YGoSimYuRdQpyxMtFobOWc5oPOCYrPCT9XkFn5kIhaSoIuJFZ2dPnCqLqDgVXzqZLcxP0"
                                    alt="Close up of computer hardware repair with technician hands holding tools"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Upgrade Your Business?"
                description="Partner with Infinity System Solution for reliable, affordable, and expert IT services. Let's discuss your requirements today."
                primaryButtonText="Get a Free Quote"
                primaryButtonHref="/contact"
                secondaryButtonText="Contact Support"
                secondaryButtonHref="/contact"
            />
        </>
    );
}
