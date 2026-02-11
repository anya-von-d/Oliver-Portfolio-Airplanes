export default function CallToActionBanner() {
  return (
    <div className="relative w-full py-12 sm:py-16 overflow-hidden" data-testid="banner-cta">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg">
          Let's get in touch
        </h2>
        <p className="mt-4 text-white/80 text-lg font-serif drop-shadow-md">
          Interested in collaborating? Reach out below.
        </p>
      </div>
    </div>
  );
}
