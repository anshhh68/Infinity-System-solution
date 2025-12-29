import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Comprehensive IT services including CCTV installation, hardware sales, repair & maintenance, and data recovery. Your trusted technology partner.",
};

interface ServiceItem {
    title: string;
    description: string;
    image: string;
}

interface ServiceSection {
    id: string;
    icon: string;
    label: string;
    title: string;
    description: string;
    buttonText: string;
    items: ServiceItem[];
    alternate: boolean;
}

export default function ServicesPage() {
    const services: ServiceSection[] = [
        {
            id: "cctv",
            icon: "videocam",
            label: "Security Systems",
            title: "Complete CCTV Solutions",
            description:
                "Secure your premises with our end-to-end surveillance services. We specialize in professional installation, security system upgrades, and setting up remote monitoring for 24/7 peace of mind.",
            buttonText: "Get Security Quote",
            alternate: false,
            items: [
                {
                    title: "Installation & Setup",
                    description:
                        "Professional on-site installation of cameras and DVR/NVR systems tailored to your layout.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBffi7R-CtSoIJXEXr5LEVe7Js5W6mbCKnPcWr2CDNZZW3SMTkFoIuIEhkYNgwTXtDT96npMU06fVPaCWVJpiCBKZxjDXMb97EemhgY3AmFsWIHqDiAYSVOy4FmTGo9Q1X1YkwzxhtA5c503w1tCuVeT9WRiK-jqwMz3u0UfAsXU8TNH-SqBtCze8McROKjO7Z-i_pibvhaeP7xwyzzwT0JkSxA9n6jgVNYRykvJZyj8DyNvE-qoAo60twhpSgNZ4gGR3awdvjRKV8",
                },
                {
                    title: "System Upgrades",
                    description:
                        "Modernizing existing security infrastructure with high-definition and smart technology.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuChdKV_4p14_Ar2Unqpwrr4o2qQVfBpcXp4fw7rCwsTrJZcxoXls3uDgQM8Hrvo-Bdz-EbMAPMej3VScR3-17lJ3z79JGwV_qF-2Qhci5We2EL3aRy7XzxUx_OLlMZvjOaEo9MAqJfAm4wRlopr4uiSFXCiG5_I-PZSOY0gE-uGuf0vWM62D-0zs56ZYj6tRYGUyHeWCYZk3h0MlMnJnGojUCjBiX6073ZAvCAVX1V2S6lkKdTFoivZNIaZhQZm4K49kafZ0zeO08w",
                },
                {
                    title: "Remote Monitoring",
                    description:
                        "Enable secure access to your live security feed from anywhere in the world.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdIlMTxAcITeGCKELqpPEFn2p9hxXQTwBm_g74TARJokt7pq1OOOsiXiAho7GK0IpKukU9udnN8mgKcfAUzRCFQ5-Je2O9vRyk-Mvyu9587zoIC9zW0TQCLPi6BDL0joRuQv3zXzDco-z02U3FdwOo1WTWPieGJw7q8Qm8WcqvRE1I4rw8UvZHXKKU2MSKupcH5fpOqQBaPzo6Ww4CspTkBXSapnyz9eZOTp2LG-748pca7NXRninfk6N0yjKPgdRdip8etMk5Ec",
                },
            ],
        },
        {
            id: "hardware",
            icon: "devices",
            label: "IT Infrastructure",
            title: "Hardware Sales",
            description:
                "Equip your workforce with the latest technology. We offer a wide range of high-performance laptops, desktop computers, and essential IT peripherals from top brands at competitive prices.",
            buttonText: "View Product Catalog",
            alternate: true,
            items: [
                {
                    title: "Laptops & Desktops",
                    description:
                        "Latest models from Dell, HP, Lenovo suitable for business and personal use.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdBW2xZjmjHgPxqbFP9X8hnGYtc5ipAGRBK4y1kQd9JOsDi9-OeN9vk8QS6Q0A5r22uDkHJM2MkD5-Q7fdw4QYZJFItpna90Riip6LZifiVdiEqpgHN_JPCDnzevGiVx2B4Ecf8n7EWPYLjK9zYmAComdpZi_ScaTPgVAJlecgs4gevOY4M4hHxUhXWUO6zxjsuCUUXbi9M7Wk_HZDftvBYvrfPwe9n1XMenZiB6fa5as-sArdZ8m6KpS7YsAX4ZSQNbLN0GCG4ZA",
                },
                {
                    title: "IT Peripherals",
                    description:
                        "Keyboards, mice, monitors, networking gear, and ergonomic office setups.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyLtqYCl6F7TCngsGnIzNbkLT3w8OdzU1Sf6xlkkA-gxAC7qz9IZWJnq6TM4-GR-fH_5n_J05Eoa-W1ihB3LulAr_Su3D_rpFP0BnEbjrxTrjXnVIQaPT6nErG6t4BZ0sKsjriVPFVBVHfARN_i8IGq3aNA4ZmEl3fiYA9kF7IaG0HYaNTvfljm7z9TWgA6e399q4rpXaz4T4YusPRu4HhANyUj9Wrsd9so5mh8lSDom_Ly7KDIwvtQHqZYvw8ujc_HFK2ORS_AOY",
                },
                {
                    title: "Genuine Accessories",
                    description:
                        "Original chargers, batteries, expansion components, and licensed software.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYJDrmbVuyHrNqsTDsT-tMnTlXslW9MLjXyoZXj8nTPP4tXcqk-IGnjvGf4r481VgeE5bS_80NIkR88GopG6AX04rVMGgeSkQuggayLu266YASkYsHQPA4yj2lHRDZlKUcXvSm8mcW16WfP4Oxppomv9r8E3gODIIOeiI6SFbymEOZuOBPRfW_j7KAFYXaH3cYUisCNNm_6q3vtb9KRY2cvf-k-j9xXCpXcAhfjA0gnyRx4TiH4ahP1kJR94KcQ4ceeJToc_dZQrI",
                },
            ],
        },
        {
            id: "repair",
            icon: "build",
            label: "Expert Support",
            title: "Repair & Maintenance",
            description:
                "Don't let downtime cost you business. Our certified technicians provide fast, reliable diagnostics and repairs for all hardware and software issues. We offer chip-level precision and comprehensive AMC packages.",
            buttonText: "Book a Repair",
            alternate: false,
            items: [
                {
                    title: "Chip-Level Repair",
                    description:
                        "Expert motherboard diagnostics and component replacement for laptops and desktops.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuxB6HS932RJN2vVqF3qDzY0zg2h0n0_RB6InpfPDWuu6sD7xfQOyqyQdA_COmTdqPBSP9Tad62jKE5tnOY-MwL9mgW92Zw2BhYqoA8oLcztpTZmFJ-Hrbr0nzB01s9qcSgfWG8fYxoL864fxrLN3OkqQ_cd99ysndxPFIwRMoJlFNaP3V0WzBbAQDzetmqoNza80E8-cDlr3YBXTuPOlmC7TiAcTs7IYOWCILlogD2Cj73t-bNZb5OsI84LjQqACp1IsBHi4BcU8",
                },
                {
                    title: "Software Troubleshooting",
                    description:
                        "OS installation, virus removal, data recovery, and performance optimization.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAb-65P5DyogtXLTnr0kW2ZtgsqovgdEWzllrVwIFLmrD7EVhIohfyCH6HOTnSYPvUBu5_nSdzW0-z0CIkC9XuxmnWhoipcOE4HnkXZEdJ3IZ7aY9SS3YA90FY8sgWRNUw993BFdN1HI8yhKdk8hnF0XvSaql9QI2DyIktKwkXnWTaYks-JGWG4vDemrX6l1UF584avFsoNIxIHMwmLBtQh6KTnYfnZHXIPgdD2RDpKhnG5k2kIGMGmj4diHILt4ISg0Oru4P35BUI",
                },
                {
                    title: "Annual Maintenance (AMC)",
                    description:
                        "Cost-effective annual contracts to ensure your business IT runs smoothly year-round.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuA034dCslL3bkaVwhTsvollA-CGlvtVoPBF1c__fjWFiTfUqa7sKdB0IsbVGbi683aQQMGB1V_RdNQHPYJXvqXDM9uCuBOZfFiuvWpYOoXYuQjIYX2q8YmtFfDC8mZW6MTOvsWGhanRzCblqfwSK1WwJmVDZ4AOPlpEWPPdCJW_WBp2pQC6IPO_GQyMfYYAaw2v8pSn_BNIxYEy9cBuFaj8CX7YY5WyBY8eDm4otCe37QYCU_IzdL7qHhPuyB85xIGSiWLY0p-WoII",
                },
            ],
        },
        {
            id: "data",
            icon: "database",
            label: "Data Solutions",
            title: "Professional Data Recovery",
            description:
                "Lost critical files? We understand the value of your data. Our advanced data recovery lab handles everything from accidentally deleted files to physically damaged hard drives, ensuring the highest retrieval success rates.",
            buttonText: "Start Recovery Process",
            alternate: true,
            items: [
                {
                    title: "Hardware Failure Recovery",
                    description:
                        "Retrieval from clicking drives, water-damaged media, and burnt circuit boards.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuBVSWUhJMpBkxD0qf7DnlwBzGMk-YyrmnQHO-RZP6S_pHIedvlfDrOrLDrH95AAN_cwqqRXM4s_0607SnwdLyQJCKCpTS-lQVxnCrUVSAtp-wN1GQ-_UCfqUKGj0p5AN2ZKe6MhPoe64UGMZ4Z_CQ8zDJpUWoYMSXGbvj8pDbhQhf1CfoaFScMH-z0cpxehiuJGikO0nKcQNjw-rqQnz0WUddMhjdg-srC5rVhimJ7ZMCgZ3b-LOOJ4eUYeZYSjK5dRdnjSYsWQfFw",
                },
                {
                    title: "Logical Data Recovery",
                    description:
                        "Restoration of accidentally deleted partitions, formatted drives, and corrupted files.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMh0LlD5uNWABa-JbI40uOFdOxrNh3riBAT9ZyKT-13C-tZonifSQ2Z22fBlQ8yFhMAiZ7xa3Q_aZViX9X-qdQYIcOUqg6dpWNhol64v7L8tTrv46nGJIQIk8voiIHqThLvkKyCF2ev-9HHxf2XPPJv9UY3vAk2I7uyHqM-NBpDLeA4YysFRH4XY02V2Q0iuobI5RetabmWL2gWi5g12X4xu_LCZo7re2i_Qgs9YjSrf3Rx9K7bJXeXPWlkAmd0yNzXjCZu_9ibiI",
                },
                {
                    title: "Secure & Confidential",
                    description:
                        "Your privacy is paramount. We follow strict protocols to ensure your recovered data remains confidential.",
                    image:
                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAUD__3Q59w3i4ynjiEWHX3-z_ViciMDh4NCIc2crSKtq5HBGJ35-duspiP42BAmtimeCqu8tsreNe8FFk6WWtZu9_zBZVwL9WDHIphsCVkp2c9Mp5zDX0xcxTTzbLLxKnqtBXMEfTElQeZLmMLhoVc4AJG0ZV2RXhyzaf0x2IrwVTGCNMf96y1FWR36ema1FF_jNZmtKT3wQlYy3K5Gumxptz1knPp-X6TBagxYc1kXF32MXhocIsfNhbaik-qbUCdF5inPrkGGPo",
                },
            ],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full bg-background">
                <div className="px-4 py-8 lg:px-20 lg:py-12 flex justify-center pt-20">
                    <div className="w-full max-w-[1280px]">
                        <div
                            className="relative overflow-hidden rounded-xl min-h-[480px] flex items-center justify-center p-6 lg:p-12"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvAxr3qMjMLfjl6Q05PVrXc9A-JDlpChCGGH9EujbyKma43A4xX85ZQmxa8vlYvxCG58hqcMLGIF4wLUucoeBZjZF8aFM3XK5OWd0lMQa52Ycx46Q5zL6yPBMU8s81UR44EplrOEuBp2OjS1e8eEQ7dpbF_dyP76uPnLBMTwCvwoh6MXBwA4BBPrdzVhToVaUqO_sO7Cne02tlV1QWQe_93H3-b8MC62LyDH0iH-K1v_8y7KSexaqzYjqn1k7ZiMvin2sEBbw5vR0')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="flex flex-col gap-6 text-center max-w-3xl z-10 animate-fadeIn">
                                <span className="text-blue-300 font-bold tracking-wider uppercase text-sm">
                                    Comprehensive IT Services
                                </span>
                                <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                                    Empowering Your Business with Complete IT Solutions
                                </h1>
                                <h2 className="text-gray-200 text-base font-normal leading-relaxed md:text-lg">
                                    From advanced security systems to hardware sales and chip-level
                                    repairs, Infinity System Solution is your trusted partner in
                                    navigating the technology landscape.
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4 mt-4">
                                    <Link
                                        href="/contact"
                                        className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-primary-foreground text-base font-bold hover:bg-primary/90 transition-colors shadow-lg"
                                    >
                                        Contact Us Today
                                    </Link>
                                    <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md text-white border border-white/20 text-base font-bold hover:bg-white/20 transition-colors">
                                        View Our Catalog
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <div className="px-4 lg:px-40 py-5 flex justify-center bg-background">
                <div className="w-full max-w-[960px] text-center animate-fadeIn">
                    <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight pb-3 pt-5">
                        Our Core Services
                    </h2>
                    <p className="text-muted-foreground">
                        Discover how we can support your infrastructure.
                    </p>
                </div>
            </div>

            {/* Service Sections */}
            {services.map((service, sectionIndex) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`w-full ${service.alternate ? "bg-muted/50" : "bg-background"}`}
                >
                    <div className="px-4 lg:px-40 py-16 flex justify-center">
                        <div className="w-full max-w-[1200px] flex flex-col gap-10">
                            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                                <div
                                    className="flex flex-col gap-4 max-w-[720px] animate-fadeIn"
                                    style={{ animationDelay: `${sectionIndex * 0.1}s` }}
                                >
                                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
                                        <span className="material-symbols-outlined text-lg">
                                            {service.icon}
                                        </span>
                                        {service.label}
                                    </div>
                                    <h3 className="text-foreground text-3xl font-black leading-tight md:text-4xl">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg font-normal leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="mt-2 flex items-center justify-center rounded-lg h-10 px-5 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all w-fit group"
                                    >
                                        {service.buttonText}
                                        <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {service.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-4 p-4 rounded-xl transition-all animate-fadeIn bg-card border border-border hover:shadow-lg hover:border-primary/30"
                                        style={{
                                            animationDelay: `${sectionIndex * 0.1 + index * 0.1}s`,
                                        }}
                                    >
                                        <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground text-lg font-bold mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Footer */}
            <section className="w-full bg-primary text-primary-foreground py-16">
                <div className="px-4 lg:px-20 flex justify-center">
                    <div className="w-full max-w-[1280px] text-center flex flex-col items-center gap-6 animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-black">
                            Ready to Get Started?
                        </h2>
                        <p className="text-primary-foreground/80 max-w-2xl">
                            Contact us today for a free consultation and discover how our
                            comprehensive IT services can transform your business.
                        </p>
                        <Link
                            href="/contact"
                            className="flex items-center justify-center rounded-lg h-12 px-8 bg-white text-primary text-base font-bold hover:bg-white/90 transition-colors shadow-lg"
                        >
                            Get Your Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
