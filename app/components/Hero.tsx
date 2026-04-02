"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { personal } from "../data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.p {...fadeUp(0.1)} className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4"
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          {...fadeUp(0.3)}
          className="text-2xl md:text-3xl font-light text-gray-400 mb-6"
        >
          {personal.title}
        </motion.h2>

        <motion.p {...fadeUp(0.4)} className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          {personal.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/10 text-gray-300 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} className="flex items-center justify-center gap-5">
          {[
            { icon: GithubIcon, href: personal.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
            { icon: TwitterIcon, href: personal.twitter, label: "Twitter" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-600 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-gray-600"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
