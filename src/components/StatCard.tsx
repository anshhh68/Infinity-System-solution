interface StatCardProps {
    icon: string;
    label: string;
    value: string;
}

export default function StatCard({ icon, label, value }: StatCardProps) {
    return (
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-300 card-hover">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{label}</p>
            <p className="text-foreground text-3xl font-bold leading-tight">{value}</p>
        </div>
    );
}
