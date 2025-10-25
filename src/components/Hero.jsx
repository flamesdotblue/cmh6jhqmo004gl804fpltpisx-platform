import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.08),rgba(2,6,12,0.0))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
        >
          Empowering local businesses to scale sustainably
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-slate-300"
        >
          Empowering local businesses to scale sustainably with systems and strategies that work for them. CRM, automation, and virtual assistants built around the way you operate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_40px_#10b98155] hover:bg-emerald-400">Book a Demo</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-black/20 px-5 py-3 text-sm font-medium text-white hover:bg-black/40">See Services</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex items-center gap-4 text-xs text-slate-400"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_#10b981]" />
          <span>Modern CRM + automation + VA enablement</span>
        </motion.div>
      </div>
    </section>
  );
}
