export function createHero() {
  return `
    <section class="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-black"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <p class="text-white/40 text-sm tracking-[0.3em] uppercase mb-6">Shark deterrent sticker</p>
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-none mb-6">
          They See.<br/>They Leave.
        </h1>
        <p class="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Orca eye stickers designed to trigger the natural avoidance response in sharks. Built for surfers. Built for the ocean.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/product.html" class="bg-white text-black font-bold uppercase tracking-widest px-10 py-4 hover:bg-white/90 transition-colors">
            Shop Now
          </a>
          <a href="#why" class="border border-white/30 text-white font-bold uppercase tracking-widest px-10 py-4 hover:border-white/60 transition-colors">
            Learn More
          </a>
        </div>
      </div>

    </section>
  `
}
