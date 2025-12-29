import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  const services = [
    {
      icon: "videocam",
      title: "CCTV Solutions",
      description:
        "Secure your assets with state-of-the-art surveillance systems. We provide installation, monitoring setup, and maintenance for complete peace of mind.",
      linkText: "Learn more",
      linkHref: "/services#cctv",
    },
    {
      icon: "devices",
      title: "Hardware Sales",
      description:
        "Access top-tier laptops, desktops, and servers at market-leading prices. We partner with major brands to supply reliable hardware for your team.",
      linkText: "Browse catalog",
      linkHref: "/services#hardware",
    },
    {
      icon: "build",
      title: "Repair & Maintenance",
      description:
        "Fast, reliable diagnostics and repair for all your devices. From component level repair to regular maintenance schedules, we keep you running.",
      linkText: "Book repair",
      linkHref: "/services#repair",
    },
    {
      icon: "settings_backup_restore",
      title: "Data Recovery",
      description:
        "Lost critical data? Our expert recovery services can retrieve your files from damaged hard drives, SSDs, and other storage media.",
      linkText: "Recover data",
      linkHref: "/services#data-recovery",
    },
  ];

  const stats = [
    { icon: "sentiment_satisfied", label: "Customer Satisfaction", value: "100%" },
    { icon: "sell", label: "Price Guarantee", value: "Best Market" },
    { icon: "bolt", label: "Response Time", value: "Fast & Reliable" },
  ];

  const testimonials = [
    {
      quote:
        "Infinity System Solution upgraded our entire office security system. The price was unbeatable and the installation was flawless.",
      name: "Michael R.",
      title: "Small Business Owner",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlp9ClqrE7pQrVhWQZMgtVeESXZ1LsmSpdn4EppSsfnVmJ2pgh5m1_p4j4x-JFr9do-UIKV4odkoCV1Ic_b_ud-P_wJCdVoBYaiUqOZBCXwwC8tg2eeF59WlJ9pZMct6T2F6Jl6yitcqfN-EDwbAWepTzm2ZpXSJlTNbbvbbAm5vi2kySNf0QDXqpfhoOjgmawgWJfAu5CreZOQDjfVm_CTxqqcMGxOtnNzbtv3iFG2ULAsmiT3oQ7AtnboqGBo9Ufn99hQDGGwKs",
    },
    {
      quote:
        "We rely on them for all our hardware needs. They always find the best deals and deliver on time. Highly recommended!",
      name: "Sarah J.",
      title: "Office Manager",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEfjhHP9G6QrE7XwlMNrvXDyRr3d8iGoO7PtLMvM5xi5r2mqy7IkcbMdBVSRsfca4SW5pZ2thSu57GGtnfF9uKkzxGHag6H5YFE5NPRxoC_UVnW6jpwFXjxevNBLgmrZ1wFlIcFmGwcctmkmM8Ae1lmrpp5Dqoqh4fnpngml8mh8hxUGw2qxuCUcprYaZlAcuPyvqN_9tpnA1kiq1W5Q4ofHdSwYubSUz-4TAXcpmgd1wGATWCPSfhYs1B7X4VN-_2oY8ylY4pcDg",
    },
    {
      quote:
        "Their repair service saved us from a major downtime. Quick response and professional handling of our server issues.",
      name: "David L.",
      title: "IT Director",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfAmB0MTDdAes19jGYcjws0KbC8pSkJ_48P5GgPkBgzTatDnFwtgderM9u0EdFwtTKDWvLZECpWkyRMbYhN934VHfK3fyohs5UzWgP1S6SERqmmw9u_IqNW3SQtBZibbim4gMda8MgKFoB5CH6rKWZl-5axIBMpQ41sTTLI6xgy--y22Q5QCHhTcO8s4seAlP09Of_yp1cZCjm-L0gAO-tyjbBgmC_g7UBgWq71-V5w_XLybtNqK8VT9vBi_Kql_mWyvYr0ZRUZxk",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-background">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center py-10 md:py-20 pt-24">
          <div className="max-w-[1280px] w-full">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              {/* Content */}
              <div className="flex flex-col gap-6 lg:w-1/2 animate-fadeIn">
                <div className="flex flex-col gap-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                    <span className="text-xs font-bold uppercase tracking-wide">
                      IT Solutions Provider
                    </span>
                  </div>
                  <h1 className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                    End-to-End IT Solutions.{" "}
                    <span className="text-primary">Unbeatable Prices.</span>
                  </h1>
                  <h2 className="text-muted-foreground text-lg font-normal leading-relaxed max-w-xl">
                    Infinity System Solution bridges the gap between sales and service.
                    Experience 100% customer satisfaction with our all-in-one technology
                    support tailored for your business growth.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center justify-center rounded-lg h-12 px-8 bg-secondary border border-border text-secondary-foreground text-base font-medium hover:bg-accent transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 lg:pl-10 animate-slideInRight">
                <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkqYOoKyLnbuVla_52lkynhJlSnQh-PMBkmKNiV08HXuCjdpW9GlRn5JHecow5QAqBMHJFq4x-ellajmQlefnAOHs4I0R6RDePcjrZ-eMy2j6cBMiJ5RgIxETHq1s-DXPTSY26FyI_tXybulFBQJWJoiwQvtvuBIaimcMXB8rnsjvjNId7W0DXV7h-wIX1isZnsAbRjXxEG5-1VjYPo8ols2y6U8lCktqGtb-_EpTK4HFjTuQ3BYopmaecJ-qvL1G8AjKilpKn6VE"
                    alt="Modern IT team working in a high-tech office environment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-background">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center py-12">
          <div className="max-w-[1280px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <TrustedBrands />

      {/* Core Services Section */}
      <section className="w-full bg-muted/50 py-16 md:py-24" id="services">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[1280px] w-full flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center items-center animate-fadeIn">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                Our Expertise
              </span>
              <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-muted-foreground text-lg font-normal leading-relaxed max-w-[720px]">
                Tailored services designed to meet the unique needs of your business
                infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-background py-16 md:py-24" id="about">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[1280px] w-full flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-10 items-start md:items-end justify-between">
              <div className="flex flex-col gap-4 max-w-[600px] animate-slideInLeft">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">
                  Why Choose Infinity?
                </span>
                <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  We deliver affordability and reliability.
                </h2>
                <p className="text-muted-foreground text-lg font-normal leading-relaxed">
                  Our mission is to democratize access to high-quality IT support. We
                  ensure your business runs smoothly so you can focus on what matters
                  most.
                </p>
              </div>
              <Link
                href="/about"
                className="flex items-center justify-center rounded-lg h-12 px-6 border border-border text-foreground text-sm font-bold hover:bg-accent transition-colors whitespace-nowrap"
              >
                About Our Company
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fadeIn">
                <div className="p-8 pb-0 z-10 relative">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">savings</span>
                  </div>
                  <h3 className="text-foreground text-2xl font-bold mb-2">
                    Unmatched Affordability
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We leverage strong industry partnerships to deliver technology at
                    the best market prices without compromising on quality or
                    performance.
                  </p>
                </div>
                <div className="relative w-full h-64 mx-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <div
                    className="absolute inset-0 rounded-t-xl shadow-xl bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqFrpkFA-TzBzLgBaX2T7uX3PSi1J1USSJm5l9rtFh6VZ2RgNEKjW0RVgMOmmrBzf5yYU72DgiSDFEtlvw9EfKPoAgr1Dm2f9gUw4Q-p9hFrA4GfbYG8kFrzbObZl32SdZV2FTJceW9Dh4VzQiZCqmRl330iKWeBBmTgAzQF8GNHVQcohQd8-24IrQ6cPIfh4YVnbE7YVMfk6a0jFcdGuvbIjj4x5AK8bkbV4b-7Gg7Uo7XJMCbvCb8lrtRtgYiEDDJxbhEFnqdNQ')`,
                    }}
                  />
                </div>
              </div>

              {/* Feature Card 2 */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="p-8 pb-0 z-10 relative">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <h3 className="text-foreground text-2xl font-bold mb-2">
                    Rock-Solid Reliability
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Trust our certified experts to keep your systems running smoothly.
                    We offer proactive monitoring and rapid response support.
                  </p>
                </div>
                <div className="relative w-full h-64 mx-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <div
                    className="absolute inset-0 rounded-t-xl shadow-xl bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuATNEU_LVNWoXYtkonzu96hOxWV875tln3hxwjKhvJEd1JcKa78fSxGKqDRYbVGa3ENDmj3zXfaSY-tkA1666q3EA8K6_EFEUzvqvGpIwRmMm0vKCQAk3o44tUoeWoeUODSM9f73rYCPU3R_E0scg3VNYeHPOK7ymtq1oDAfKVMEi93EPz0h0fA1ltFy2o6QI3YWpo39MJWgZuiSq5Shj2Gskyyg-xj4NvAdTQlizDqjdHv9WrHCqlSgtTZlBfFjmgzfg9PFM3BpWg')`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-muted/50 py-16">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[1280px] w-full">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-foreground text-2xl md:text-3xl font-bold">
                Trusted by growing businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to upgrade your IT infrastructure?"
        description="Get a free consultation today and discover how we can help your business grow with affordable technology."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
