export function createFaq() {
  return `
    <section class="bg-black py-32 px-8 border-t border-white/10">
      <div class="max-w-3xl mx-auto">

        <div class="mb-16">
          <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-4">Got questions</p>
          <h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            FAQ
          </h2>
        </div>

        <div class="space-y-px" id="faq-list">

          ${[
            {
              q: "Does it actually work?",
              a: "The concept is based on the known predator avoidance behaviour sharks display toward orcas. The stickers are a passive visual deterrent — not a guaranteed shark repellent. They're one extra layer of protection, not a replacement for awareness."
            },
            {
              q: "Will it damage my board?",
              a: "No. Orca Eyes use a marine-grade adhesive designed for smooth surfaces. They apply cleanly and remove without leaving residue or damaging your board's finish."
            },
            {
              q: "How long do they last?",
              a: "They're built for ocean use — UV resistant, waterproof, and tough enough to handle regular surf sessions. Most surfers get a full season or more out of a set."
            },
            {
              q: "Where do I put them on my board?",
              a: "On the underside of the board near the nose — the area most visible to anything below you in the water. Full placement guide included with every order."
            },
            {
              q: "What boards do they fit?",
              a: "Any standard surfboard — shortboards, longboards, fish, mid-lengths. The stickers are sized to work across all board widths."
            }
          ].map((item, i) => `
            <div class="faq-item border-t border-white/10 cursor-pointer group" onclick="toggleFaq(${i})">
              <div class="flex items-center justify-between py-6">
                <h3 class="text-white font-bold tracking-wide pr-8">${item.q}</h3>
                <span class="text-white/40 text-2xl font-thin flex-shrink-0 faq-icon-${i} transition-transform duration-300">+</span>
              </div>
              <div class="faq-answer-${i} hidden pb-6">
                <p class="text-white/50 leading-relaxed">${item.a}</p>
              </div>
            </div>
          `).join('')}

        </div>

      </div>
    </section>
  `
}

export function initFaq() {
  window.toggleFaq = function(i) {
    const answer = document.querySelector(`.faq-answer-${i}`)
    const icon = document.querySelector(`.faq-icon-${i}`)
    answer.classList.toggle('hidden')
    icon.textContent = answer.classList.contains('hidden') ? '+' : '−'
  }
}
