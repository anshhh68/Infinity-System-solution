'use client';

import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Contact Us",
//   description:
//     "Get in touch with Infinity System Solution. Contact us for IT services, hardware sales, CCTV installation, and repairs.",
// };

interface ContactInfoItem {
    icon: string;
    title: string;
    primary: string;
    secondary: string;
    href?: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        privacy: false,
    });

    const contactInfo: ContactInfoItem[] = [
        {
            icon: "call",
            title: "Phone",
            primary: "+91 74057 87727",
            secondary: "Mon-Sat, 10am - 8pm IST",
            href: "tel:+917405787727",
        },
        {
            icon: "mail",
            title: "Email Address",
            primary: "infinitysystemsolution@gmail.com",
            secondary: "We respond within 24 hours",
            href: "mailto:infinitysystemsolution@gmail.com",
        },
        {
            icon: "local_shipping",
            title: "Door to Door Service",
            primary: "We Come to You!",
            secondary: "Home & Office pickup/delivery in Vadodara & nearby",
        },
    ];

    const faqs: FAQItem[] = [
        {
            question: "What is your typical response time?",
            answer:
                "We strive to respond to all inquiries within 24 hours during business days. For urgent support matters, our existing clients have access to a dedicated 24/7 hotline.",
        },
        {
            question: "Do you offer remote IT support?",
            answer:
                "Yes, approximately 95% of IT issues can be resolved remotely by our expert technicians. We also provide on-site support when physical intervention is required.",
        },
        {
            question: "Is the initial consultation really free?",
            answer:
                "Absolutely. We believe in understanding your business needs first. Our initial discovery call and basic assessment are completely complimentary with no obligation.",
        },
    ];

    const services = [
        "CCTV Installation",
        "Hardware Sales",
        "Repair & Maintenance",
        "Data Recovery",
        "Network Setup",
        "Consulting",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const whatsappMessage = `*New Inquiry from Website*

*Name:* ${formData.fullName}
*Company:* ${formData.companyName || 'Not specified'}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interest:* ${formData.service || 'Not specified'}

*Message:*
${formData.message}`;

        // WhatsApp phone number (without + sign, country code included)
        const whatsappNumber = "917405787727";

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full"
                style={{
                    backgroundImage: `linear-gradient(rgba(19, 91, 236, 0.9) 0%, rgba(16, 22, 34, 0.95) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAONC6PjPg2vsiZPVAQZijI6kT84TI_N6OA4y9eMb7quZmHJhkCHQy7ks-0y_3W20xiMI0iCMzdwQpokEONjat2mkduunbU9DKmt9vx5pvf-LhPn4tK1BdMsOqujJ6W7qzIktDLOw33K6KzvLqT0mgpmXtlwbLdtHQVkR0fnm09Ys-4cbk_o3_dI8DWH6x7vYRuZLGAzH6s6MeYQL6lWus6dSt1F9XTe6rpk_b959qfQc-6L0r1_o-ROwSkh2wW0qWFJxqVfaEflzE')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex justify-center py-20 px-6 lg:px-20">
                    <div className="max-w-[960px] flex flex-col items-center text-center gap-6 animate-fadeIn">
                        <span className="bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                            We are here to help
                        </span>
                        <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                            Let&apos;s Solve Your IT Challenges
                        </h1>
                        <p className="text-white/90 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                            Contact Infinity System Solution today for a free consultation or
                            quote on your IT and Security needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="flex flex-1 justify-center w-full py-12 lg:py-20 px-4 lg:px-10">
                <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Contact Information Column (Left) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="animate-fadeIn">
                            <h3 className="text-2xl font-bold text-slate-900  mb-2">
                                Get in touch directly
                            </h3>
                            <p className="text-slate-600 ">
                                Our team is ready to assist you with any inquiries regarding our
                                comprehensive IT solutions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white  border border-slate-200  shadow-sm hover:border-[#135bec]/50 transition-colors group animate-fadeIn"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#135bec]/10 text-[#135bec] group-hover:bg-[#135bec] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">{info.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 ">
                                            {info.title}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg font-semibold text-slate-900  hover:text-[#135bec] transition-colors"
                                            >
                                                {info.primary}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-slate-900 ">
                                                {info.primary}
                                            </p>
                                        )}
                                        <p className="text-xs text-slate-400 mt-1">{info.secondary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Signal */}
                        <div
                            className="mt-4 p-6 bg-[#135bec]/5 rounded-xl border border-[#135bec]/10 animate-fadeIn"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-symbols-outlined text-[#135bec]">
                                    verified_user
                                </span>
                                <h4 className="font-bold text-slate-900 ">
                                    Trusted by Industry Leaders
                                </h4>
                            </div>
                            <p className="text-sm text-slate-600  mb-4">
                                Join over 500+ businesses who trust Infinity System Solution for
                                their end-to-end technology needs.
                            </p>
                            <div className="flex -space-x-3">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCn2uHRO7ZcBWQVFueIwlNWCUacmAAWfW8fZAYO3Z9XiFFbk4M2Tr1276G0CRE2FU-9tiO0lGO6fPAQpMnQXVCuolmnKget-jNvogz_LQqy3mUkWgo-Gb7_dZdYO1BGSkJpdyBkYsZBkzwv9dozr4uCYMuoxltPUIm9BxHCEX2ECbSMcIF0-MQSfyFnADAN_eH3LtGacR9uBbs0ZtoWoYW7wryYwl-3UfaA4dhpW3Az35DwZ6FB_qqf_vIJ5nG_dH4N5bXkDyLr1ks",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuB83MpukVq-La2RhDCn-i-Z5aYYzwlkefKDIGIsOw9LQ0xXmAcN-VZOm8vnivx6hdoeoBfr9EoRixdjvKTW8hq_ezJzpaptG7Ysc6V87Hq98GhZrP_SoRsXK2FdbXWpKUCr8JjLDKg4ee-TynoPj4uAjUBKYNxJ6Ji2lAhJnJADXm4U4-50H_B1kGhjrFZPLK7plxy6kUB9XvQsGBmfCNDLx8ol1fExwwITw8rTU5QtAQLRiaFA33J1BHncyJEpfyLUEMtlUATQK5I",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBme9MtMxYI6xD1PJ9MsQ2kP7SddVLnk9ISfn6d5NMl7_CAbo3AC9BOOh1-tLTuLvdvToY0_SX0K5DMkxTYXcNTVsPo9hWYvORuPEyKc1ZwDdw88FOfVwa9iip5bxrR8sxgGPLs2qu63ZCrmmA_t0t3CyB92T5oOlyx0DHaZxmI6adPVh0233kWxzDyJIXSow3NSC8I6-WeO4jHvdTqQkX55-BStOTd4V90N-FXjUWYh2A9Lc8ml0FEJga24T3D-9CO7kS2dN_S4s8",
                                ].map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-10 h-10 rounded-full border-2 border-white  relative overflow-hidden"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Client ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white  bg-slate-200  text-xs font-bold text-slate-600 ">
                                    +500
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column (Right) */}
                    <div className="lg:col-span-7">
                        <div
                            className="bg-white  rounded-2xl shadow-lg border border-slate-200  p-6 lg:p-8 animate-slideInRight"
                        >
                            <h3 className="text-2xl font-bold text-slate-900  mb-6">
                                Send us a message
                            </h3>
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-900 ">
                                            Full Name
                                        </span>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  h-12 px-4 focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all placeholder:text-slate-400"
                                            placeholder="John Doe"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-900 ">
                                            Company Name
                                        </span>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  h-12 px-4 focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all placeholder:text-slate-400"
                                            placeholder="Acme Corp"
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-900 ">
                                            Email Address
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  h-12 px-4 focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all placeholder:text-slate-400"
                                            placeholder="john@example.com"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-900 ">
                                            Phone Number
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  h-12 px-4 focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all placeholder:text-slate-400"
                                            placeholder="(555) 123-4567"
                                        />
                                    </label>
                                </div>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-900 ">
                                        Service Interest
                                    </span>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  h-12 px-4 focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all appearance-none"
                                        >
                                            <option value="" disabled>
                                                Select a service...
                                            </option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-900 ">
                                        Your Message
                                    </span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border border-slate-300  bg-slate-50  text-slate-900  p-4 h-32 resize-y focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-all placeholder:text-slate-400"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </label>

                                <div className="flex items-center gap-3 mt-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleInputChange}
                                        className="rounded border-slate-300 text-[#135bec] focus:ring-[#135bec]"
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="text-xs text-slate-500 "
                                    >
                                        I agree to the processing of my personal data for the purpose of
                                        contacting me.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white text-base font-bold tracking-wide shadow-md"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>Send via WhatsApp</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] relative bg-slate-200 ">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-80"
                    style={{
                        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJHzF-LYBODv282n3zHI9pl-KPHuxc-Xp0UgyTkM7Jz8osiVFTQiGvnxKrI-IQOnjhnsyFhKXBmmCjz7GY9-SuDA4mCbb1hEVac2agrQGQnkGSYAUMiSKtjijoDuEcYYhN1LVDF0Bo0NHNrA6PTXJCCvL6L7kReBDtMzHvHhRCTVMRz5y3lk-qsxmMr8F9dSuKLzDapcoQSZidIIvXVyU1fJS-URr15SVROaaSnUZ9wrVxGgnVbqcKO5CSHAybrPKsfHnod3PUoXk')`,
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white  p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-xs animate-float">
                        <div className="bg-[#135bec] text-white p-2 rounded-full">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div>
                            <p className="font-bold text-sm ">
                                Infinity System Solution
                            </p>
                            <p className="text-xs text-slate-500">Vadodara, Gujarat</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-white  py-16 px-4 border-t border-slate-200 ">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900  animate-fadeIn">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-slate-50  p-5 rounded-lg open:ring-1 open:ring-[#135bec]/20 transition-all cursor-pointer animate-fadeIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <summary className="flex justify-between items-center font-semibold text-lg list-none text-slate-900 ">
                                    {faq.question}
                                    <span className="transition group-open:rotate-180 material-symbols-outlined">
                                        expand_more
                                    </span>
                                </summary>
                                <p className="text-slate-600  mt-3 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

