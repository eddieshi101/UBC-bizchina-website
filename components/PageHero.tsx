type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-navy pt-28 pb-14 text-white sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-px w-16 origin-left bg-lacquer animate-draw-line" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
