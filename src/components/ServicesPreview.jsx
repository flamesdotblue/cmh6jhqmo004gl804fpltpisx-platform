import { Cog, BarChart3, Headset, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'CRM setup, migration, and optimization',
    desc: 'GoHighLevel, HubSpot, or custom CRM implementations tuned for your pipeline and playbooks.',
    icon: Cog,
    features: ['Pipeline & stages', 'Integrations & forms', 'Data migration']
  },
  {
    title: 'Lead and client management automation',
    desc: 'Automate intake, routing, follow-ups, and reminders. Never let a qualified lead slip.',
    icon: Workflow,
    features: ['Routing & SLAs', 'Sequences & SMS', 'Appointment workflows']
  },
  {
    title: 'Virtual assistant integration',
    desc: 'Onboard VAs with the right scripts and systems for bookings and client support.',
    icon: Headset,
    features: ['Playbooks & scripts', 'Shared inboxes', 'QA & reporting']
  },
  {
    title: 'Analytics dashboards & tracking',
    desc: 'See what’s working with real-time dashboards and attribution you can trust.',
    icon: BarChart3,
    features: ['Funnel reporting', 'Channel attribution', 'Exec summaries']
  }
];

export default function ServicesPreview() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Services that compound</h2>
          <p className="mt-2 max-w-2xl text-slate-400">Implement the core systems that drive consistent growth. Start with one, or bundle for faster impact.</p>
        </div>
        <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_20px_#10b98155] hover:bg-emerald-400">Get a tailored plan</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/50 to-slate-900/10 p-6"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
            <div className="flex items-start gap-4">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">{card.title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{card.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.features.map((f) => (
                    <li key={f} className="text-xs text-slate-300 rounded-md border border-slate-800/60 bg-slate-950/40 px-2 py-1">{f}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Discuss this service →</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
