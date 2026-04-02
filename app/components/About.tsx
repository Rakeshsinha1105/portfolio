"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "../data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            A bit about who I am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-64 mx-auto md:mx-0"
          >
            <img
              src="/avatar.jpg"
              alt="Rakesh Sinha Jangam"
              className="w-64 h-64 object-cover object-top rounded-2xl border border-white/10"
            />
            <div className="absolute w-64 h-64 top-0 rounded-2xl bg-violet-500/5 -rotate-3 -z-10" />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4 text-gray-400 leading-relaxed"
          >
            <p>{personal.bio}</p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
            </p>
            <p>
              I believe in writing code that is not just functional but also readable and maintainable — code that other developers enjoy working with.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-400 hover:bg-violet-600/20 transition-all duration-200"
              >
                {personal.email}
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
