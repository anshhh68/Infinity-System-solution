import Link from 'next/link';

interface CTASectionProps {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export default function CTASection({
    title,
    description,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
}: CTASectionProps) {
    return (
        <section className="w-full bg-background py-16 md:py-20">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="max-w-[1280px] w-full bg-primary rounded-3xl overflow-hidden relative">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
                        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
                            <h2 className="text-primary-foreground text-3xl md:text-4xl font-black leading-tight">{title}</h2>
                            <p className="text-primary-foreground/80 text-lg">{description}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={primaryButtonHref}
                                className="flex items-center justify-center rounded-lg h-12 px-8 bg-white text-primary text-base font-bold hover:bg-white/90 transition-colors shadow-lg"
                            >
                                {primaryButtonText}
                            </Link>
                            {secondaryButtonText && secondaryButtonHref && (
                                <Link
                                    href={secondaryButtonHref}
                                    className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 text-base font-bold hover:bg-primary-foreground/20 transition-colors"
                                >
                                    {secondaryButtonText}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
