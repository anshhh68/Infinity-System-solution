import Image from 'next/image';

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    image: string;
}

export default function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
    return (
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
            {/* Star Rating */}
            <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-sm">star</span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                &ldquo;{quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-muted overflow-hidden relative">
                    <Image
                        src={image}
                        alt={`${name}'s portrait`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="text-foreground text-sm font-bold">{name}</p>
                    <p className="text-muted-foreground text-xs">{title}</p>
                </div>
            </div>
        </div>
    );
}
