import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur border-b border-slate-800/60 bg-slate-950/50' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/30">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="text-white text-lg font-semibold tracking-tight">Elvara</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#industries" className="hover:text-white">Industries</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm text-slate-300 hover:text-white">Contact</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_20px_#10b98155] hover:bg-emerald-400">Book a Demo</a>
        </div>

        <button className="md:hidden text-slate-200" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800/60 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col gap-4 text-slate-200">
              <a onClick={() => setOpen(false)} href="#services">Services</a>
              <a onClick={() => setOpen(false)} href="#pricing">Pricing</a>
              <a onClick={() => setOpen(false)} href="#industries">Industries</a>
              <a onClick={() => setOpen(false)} href="#about">About</a>
              <a onClick={() => setOpen(false)} href="#faq">FAQ</a>
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black">Book a Demo</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
