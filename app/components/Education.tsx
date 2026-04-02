"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Academic background</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/5 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-10 relative"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-violet-500 hidden md:block" />

                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white leading-snug">{edu.degree}</h3>
                      <p className="text-violet-400 text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-gray-600 text-sm font-mono block">{edu.period}</span>
                      <span className="text-gray-500 text-xs">{edu.grade}</span>
                    </div>
                  </div>
                  {edu.skills.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
