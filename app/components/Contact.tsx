"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { personal } from "../data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/20"
          >
            <Mail size={18} />
            Send me an email
          </a>

          <div className="flex items-center justify-center gap-6 pt-6">
            {[
              { icon: GithubIcon, href: personal.github, label: "GitHub" },
              { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
              { icon: TwitterIcon, href: personal.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-gray-500 hover:text-violet-400 transition-colors text-sm"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
