"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where I&apos;ve worked</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/5 hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-10 relative"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-violet-500 hidden md:block" />

                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-violet-400 text-sm">{job.company}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{job.location}</p>
                    </div>
                    <span className="text-gray-600 text-sm font-mono shrink-0">{job.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((point, j) => (
                      <li key={j} className="flex gap-2 text-gray-500 text-sm leading-relaxed">
                        <span className="text-violet-500 mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
