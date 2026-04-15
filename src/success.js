import './style.css'
import { createNav } from './components/nav.js'

document.querySelector('#success-app').innerHTML = `
  ${createNav()}
  <main class="min-h-screen flex items-center justify-center px-8">
    <div class="text-center max-w-lg">
      <div class="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-8">
        <span class="text-white text-2xl">✓</span>
      </div>
      <p class="text-white/30 text-sm tracking-[0.3em] uppercase mb-4">Order confirmed</p>
      <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
        You're All Set.
      </h1>
      <p class="text-white/50 leading-relaxed mb-10">
        Thanks for your order. Your Orca Eyes are on their way. Check your email for confirmation and tracking details.
      </p>
      <a href="/" class="inline-block border border-white/30 text-white font-bold uppercase tracking-widest px-10 py-4 hover:border-white/60 transition-colors">
        Back to Home
      </a>
    </div>
  </main>
`
