export function createWhy() {
  return `
    <section id="why" class="bg-black py-32 px-8">

      <!-- Orca background -->
      <div class="relative mb-20 overflow-hidden">
        <img src="/images/orcas.jpg" alt="Orcas" class="w-full h-64 md:h-96 object-cover opacity-60"/>
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>
      </div>

      <div class="max-w-5xl mx-auto">

        <div class="mb-20">
          <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-4">The science</p>
          <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            Why It Works
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-px bg-white/10">

          <div class="bg-black p-10 hover:bg-white/5 transition-colors">
            <span class="text-white/20 text-4xl font-black">01</span>
            <h3 class="text-white text-xl font-bold uppercase tracking-wide mt-4 mb-3">Orcas Are Apex Predators</h3>
            <p class="text-white/50 leading-relaxed">Sharks instinctively avoid orcas. The distinct black and white eye pattern triggers a hardwired avoidance response — no electronics, no chemicals.</p>
          </div>

          <div class="bg-black p-10 hover:bg-white/5 transition-colors">
            <span class="text-white/20 text-4xl font-black">02</span>
            <h3 class="text-white text-xl font-bold uppercase tracking-wide mt-4 mb-3">Visual Predator Cues</h3>
            <p class="text-white/50 leading-relaxed">Sharks rely heavily on visual information. Large, high-contrast eye patterns signal a predator is present — and sharks don't stick around to find out.</p>
          </div>

          <div class="bg-black p-10 hover:bg-white/5 transition-colors">
            <span class="text-white/20 text-4xl font-black">03</span>
            <h3 class="text-white text-xl font-bold uppercase tracking-wide mt-4 mb-3">Passive Protection</h3>
            <p class="text-white/50 leading-relaxed">Stick it on and forget it. No charging, no maintenance, no drag. Just a subtle layer of deterrence every time you paddle out.</p>
          </div>

          <div class="bg-black p-10 hover:bg-white/5 transition-colors">
            <span class="text-white/20 text-4xl font-black">04</span>
            <h3 class="text-white text-xl font-bold uppercase tracking-wide mt-4 mb-3">Built for Real Conditions</h3>
            <p class="text-white/50 leading-relaxed">Marine-grade adhesive. UV resistant. Designed to survive wipeouts, reef scrapes, and months in the ocean without peeling.</p>
          </div>

        </div>
      </div>
    </section>
  `
}
