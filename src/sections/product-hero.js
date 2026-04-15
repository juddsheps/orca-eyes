export function createProductHero() {
  return `
    <section id="product" class="pt-32 pb-20 px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-start">

          <!-- Image Gallery -->
          <div class="space-y-4">
            <div class="aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
              <p class="text-white/20 text-sm tracking-widest uppercase">Product Image</p>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <div class="aspect-square bg-white/5 border border-white/10 cursor-pointer hover:border-white/40 transition-colors"></div>
              <div class="aspect-square bg-white/5 border border-white/10 cursor-pointer hover:border-white/40 transition-colors"></div>
              <div class="aspect-square bg-white/5 border border-white/10 cursor-pointer hover:border-white/40 transition-colors"></div>
              <div class="aspect-square bg-white/5 border border-white/10 cursor-pointer hover:border-white/40 transition-colors"></div>
            </div>
          </div>

          <!-- Buy Box -->
          <div class="sticky top-32">
            <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-3">Shark deterrent sticker</p>
            <h1 class="text-4xl font-black uppercase tracking-tight text-white mb-4">Orca Eyes</h1>

            <p class="text-white/50 leading-relaxed mb-8">
              Marine-grade waterproof stickers designed to trigger the natural shark avoidance response. One pack covers one board — front and back placement included.
            </p>

            <!-- Pack selector -->
            <div class="mb-8">
              <p class="text-white/40 text-sm tracking-wider uppercase mb-3">Select Pack</p>
              <div class="grid grid-cols-3 gap-3">
                <button id="pack-1" class="pack-btn border border-white text-white py-4 text-center transition-colors" onclick="selectPack(1)">
                  <div class="font-bold">1 Pack</div>
                  <div class="text-sm text-white/60">$14.99</div>
                </button>
                <button id="pack-2" class="pack-btn border border-white/20 text-white/50 py-4 text-center transition-colors" onclick="selectPack(2)">
                  <div class="font-bold">2 Pack</div>
                  <div class="text-sm text-white/60">$24.99</div>
                  <div class="text-xs text-green-400">Save $5</div>
                </button>
                <button id="pack-3" class="pack-btn border border-white/20 text-white/50 py-4 text-center transition-colors" onclick="selectPack(3)">
                  <div class="font-bold">3 Pack</div>
                  <div class="text-sm text-white/60">$34.99</div>
                  <div class="text-xs text-green-400">Save $10</div>
                </button>
              </div>
            </div>

            <!-- Buy button -->
            <button id="buy-btn" onclick="buyNow()" class="w-full bg-white text-black font-bold uppercase tracking-widest py-5 text-lg hover:bg-white/90 transition-colors mb-4">
              Buy Now — <span id="selected-price">$14.99</span>
            </button>
            <p class="text-white/30 text-sm text-center tracking-wider">Free shipping · Secure checkout via Stripe</p>

            <!-- Details -->
            <div class="mt-10 space-y-px border-t border-white/10 pt-8">
              <div class="flex justify-between py-3 border-b border-white/10">
                <span class="text-white/40 text-sm">Material</span>
                <span class="text-white/70 text-sm">Marine-grade vinyl</span>
              </div>
              <div class="flex justify-between py-3 border-b border-white/10">
                <span class="text-white/40 text-sm">Waterproof</span>
                <span class="text-white/70 text-sm">100%</span>
              </div>
              <div class="flex justify-between py-3 border-b border-white/10">
                <span class="text-white/40 text-sm">UV Resistant</span>
                <span class="text-white/70 text-sm">Yes</span>
              </div>
              <div class="flex justify-between py-3 border-b border-white/10">
                <span class="text-white/40 text-sm">Pack includes</span>
                <span class="text-white/70 text-sm">2 stickers + guide</span>
              </div>
              <div class="flex justify-between py-3">
                <span class="text-white/40 text-sm">Ships from</span>
                <span class="text-white/70 text-sm">Western Australia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}

export function initProduct() {
  let selectedPriceId = 'price_1TMMUGEmd76LTivJVsKX7nTE' // 1 pack default

  const packs = {
    1: { priceId: 'price_1TMMUGEmd76LTivJVsKX7nTE', price: '$14.99' },
    2: { priceId: 'price_1TMMUgEmd76LTivJv8fOglGp', price: '$24.99' },
    3: { priceId: 'price_1TMMV1Emd76LTivJZGm8N0uu', price: '$34.99' },
  }

  window.selectPack = function(num) {
    selectedPriceId = packs[num].priceId
    document.getElementById('selected-price').textContent = packs[num].price
    document.querySelectorAll('.pack-btn').forEach(btn => {
      btn.classList.remove('border-white', 'text-white')
      btn.classList.add('border-white/20', 'text-white/50')
    })
    const active = document.getElementById(`pack-${num}`)
    active.classList.add('border-white', 'text-white')
    active.classList.remove('border-white/20', 'text-white/50')
  }

  window.buyNow = async function() {
    const btn = document.getElementById('buy-btn')
    btn.textContent = 'Loading...'
    btn.disabled = true

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: selectedPriceId, quantity: 1 })
      })
      const { url } = await res.json()
      window.location.href = url
    } catch (err) {
      btn.textContent = 'Buy Now'
      btn.disabled = false
      alert('Something went wrong. Please try again.')
    }
  }
}
