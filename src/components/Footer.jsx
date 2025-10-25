export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-white text-lg font-semibold">Elvara</div>
            <p className="mt-1 text-sm text-slate-400">Sustainable growth systems for local businesses.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Elvara. All rights reserved.</p>
          <p>Built with care — dark mode first.</p>
        </div>
      </div>
    </footer>
  );
}
