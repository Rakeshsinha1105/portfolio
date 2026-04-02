"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { leadership } from "../data";

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Beyond the code</h2>
        </motion.div>

        <div className="space-y-8">
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-violet-400 text-sm mt-0.5">{item.organization}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.location}</p>
                </div>
                <span className="text-gray-600 text-sm font-mono shrink-0">{item.period}</span>
              </div>

              <ul className="space-y-2 mb-5">
                {item.description.map((point, j) => (
                  <li key={j} className="flex gap-2 text-gray-500 text-sm leading-relaxed">
                    <span className="text-violet-500 mt-1.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
