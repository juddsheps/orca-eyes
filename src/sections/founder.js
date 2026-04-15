export function createFounder() {
  return `
    <section class="bg-black py-32 px-8 border-t border-white/10">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-20 items-center">

          <!-- Text side -->
          <div>
            <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-6">Why I built this</p>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none mb-8">
              Started In<br/>The Lineup
            </h2>
            <p class="text-white/50 leading-relaxed mb-6">
              I surf in Western Australia. Shark encounters aren't hypothetical here — they're part of the conversation every time you paddle out.
            </p>
            <p class="text-white/50 leading-relaxed mb-6">
              I wanted something simple. No gadgets, no bulk, nothing that changes how my board feels. Just a passive layer of protection that's always there.
            </p>
            <p class="text-white/50 leading-relaxed">
              Orca Eyes is that. Designed by a surfer, for surfers.
            </p>
          </div>

          <!-- Visual side -->
          <div class="relative">
            <div class="aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
              <div class="text-center">
                <div class="w-32 h-32 rounded-full border-4 border-white/20 mx-auto mb-6 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <div class="w-6 h-6 rounded-full bg-white/60"></div>
                  </div>
                </div>
                <p class="text-white/20 text-sm tracking-widest uppercase">Photo coming soon</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}
