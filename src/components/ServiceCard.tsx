import Link from 'next/link';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}

export default function ServiceCard({ icon, title, description, linkText, linkHref }: ServiceCardProps) {
    return (
        <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-foreground text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            <Link
                href={linkHref}
                className="mt-auto inline-flex items-center text-primary font-bold text-sm hover:underline pt-4 group/link"
            >
                {linkText}
                <span className="material-symbols-outlined text-base ml-1 group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                </span>
            </Link>
        </div>
    );
}
