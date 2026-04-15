export function createCta() {
  return `
    <section class="bg-black py-32 px-8 border-t border-white/10">
      <div class="max-w-5xl mx-auto text-center">

        <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-6">Ready to paddle out</p>
        <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-8">
          Surf Smarter.
        </h2>
        <p class="text-white/50 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          One simple sticker. Passive protection every session. No batteries, no bulk, no compromise.
        </p>
        <a href="/product.html" class="inline-block bg-white text-black font-bold uppercase tracking-widest px-12 py-5 text-lg hover:bg-white/90 transition-colors">
          Shop Now
        </a>
        <p class="text-white/20 text-sm mt-8 tracking-wider">Free shipping on all Australian orders</p>

      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/10 py-10 px-8">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="text-white font-bold tracking-widest uppercase">Orca Eyes</span>
        <span class="text-white/20 text-sm">© 2025 Orca Eyes. All rights reserved.</span>
        <div class="flex gap-6">
          <a href="#" class="text-white/30 hover:text-white text-sm tracking-wider uppercase transition-colors">Instagram</a>
          <a href="#" class="text-white/30 hover:text-white text-sm tracking-wider uppercase transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  `
}
