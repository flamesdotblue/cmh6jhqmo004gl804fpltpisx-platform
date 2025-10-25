import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import Footer from './components/Footer';

function App() {
  // Smooth scroll for hash links
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090C] text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />

        <section id="services" className="relative">
          <ServicesPreview />
        </section>

        <section id="pricing" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Straightforward pricing</h2>
              <p className="mt-2 max-w-2xl text-slate-400">Value-based monthly retainers engineered to pay for themselves. Get clarity, not surprise invoices.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur">
                <h3 className="text-white text-lg font-medium">Launch</h3>
                <p className="mt-1 text-sm text-slate-400">For new systems or first automations</p>
                <div className="mt-6 text-3xl font-semibold text-white">$1,500<span className="text-base text-slate-400 font-normal">/mo</span></div>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  <li>CRM setup or migration</li>
                  <li>Lead capture pipeline</li>
                  <li>Booking assistant (VA or AI)</li>
                  <li>Core automations</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_30px_#10b98155] hover:bg-emerald-400">Start with Launch</a>
              </div>
              <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-slate-900/20 p-6 shadow-[0_0_80px_#10b98120] ring-1 ring-inset ring-emerald-500/20">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">Most Popular</div>
                <h3 className="text-white text-lg font-medium">Scale</h3>
                <p className="mt-1 text-sm text-slate-400">For growing teams who want leverage</p>
                <div className="mt-6 text-3xl font-semibold text-white">$3,000<span className="text-base text-slate-400 font-normal">/mo</span></div>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  <li>Everything in Launch</li>
                  <li>Advanced automations & routing</li>
                  <li>Sales enablement & playbooks</li>
                  <li>Analytics dashboards</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_30px_#10b98155] hover:bg-emerald-400">Choose Scale</a>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6">
                <h3 className="text-white text-lg font-medium">Custom</h3>
                <p className="mt-1 text-sm text-slate-400">Complex orgs, multi-location, or bespoke</p>
                <div className="mt-6 text-3xl font-semibold text-white">Get a quote</div>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  <li>Multi-CRM or data warehouse</li>
                  <li>Call center + VA orchestration</li>
                  <li>Attribution & BI integrations</li>
                  <li>Premium SLA & enablement</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-slate-800/60">Talk to sales</a>
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Who we help</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Local service businesses that win with speed and consistency.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {['Real Estate', 'Contractors', 'Med Spas & Salons', 'Car Washes', 'Home Services', 'Fitness & Wellness'].map((i) => (
                <div key={i} className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 text-slate-200">{i}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">About Elvara</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">Elvara is a modern growth-partner agency helping local businesses streamline operations, capture more leads, and scale sustainably. We implement best-in-class CRM systems, intelligent automations, and dedicated virtual assistants so your team can focus on what they do best. It’s not just software—it’s systems and strategy tailored to how you work.</p>
          </div>
        </section>

        <section id="faq" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">FAQ</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-white font-medium">Do you replace my team with AI?</h3>
                <p className="mt-2 text-slate-400">No. We augment your team with automation and assistants that take repetitive work off their plate. Humans stay in control.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">Which CRMs do you support?</h3>
                <p className="mt-2 text-slate-400">GoHighLevel, HubSpot, and custom stacks. We migrate, optimize, and maintain.</p>
              </div>
              <div>
                <h3 className="text-white font-medium">How fast can we go live?</h3>
                <p className="mt-2 text-slate-400">Launch plans typically go live in 2–4 weeks; Scale plans 4–8 weeks depending on complexity.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-900/20 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Book a free consultation</h2>
              <p className="mt-2 text-slate-400">Tell us about your goals. We’ll show you the systems that can get you there faster.</p>
              <form className="mt-8 grid gap-4 md:grid-cols-2">
                <input required className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none" placeholder="Full name" />
                <input required type="email" className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none" placeholder="Work email" />
                <input className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none" placeholder="Company" />
                <input className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none" placeholder="Website (optional)" />
                <textarea className="md:col-span-2 min-h-[120px] w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-emerald-500 focus:outline-none" placeholder="What are you trying to solve?" />
                <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_30px_#10b98155] hover:bg-emerald-400">Request demo</button>
                  <a href="https://cal.com/" target="_blank" rel="noreferrer" className="text-sm text-slate-400 underline-offset-4 hover:underline">Or schedule via calendar</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
