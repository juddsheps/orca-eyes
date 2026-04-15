export function createNav() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <a href="/" class="text-white text-xl font-bold tracking-widest uppercase">Orca Eyes</a>
      <div class="flex items-center gap-8">
        <a href="#why" class="text-white/60 hover:text-white text-sm tracking-wider uppercase transition-colors">Why</a>
        <a href="#product" class="text-white/60 hover:text-white text-sm tracking-wider uppercase transition-colors">Product</a>
        <a href="/product.html" class="bg-white text-black text-sm font-bold tracking-wider uppercase px-6 py-3 hover:bg-white/90 transition-colors">Shop Now</a>
      </div>
    </nav>
  `
}
