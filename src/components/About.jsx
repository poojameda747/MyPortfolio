import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-cyan-400 mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center text-xl text-gray-300 leading-9"
      >
        I am a Computer Science graduate at Malla Reddy University with hands-on experience in Python development, machine learning, FastAPI, and AI-powered applications.

I have built intelligent systems including enterprise document retrieval platforms, prediction models, and data analytics dashboards through academic projects and internships.

I am passionate about solving real-world problems using technology and continuously learning modern development tools.
      </motion.p>
    </section>
  )
}

export default About