import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-36 h-36 rounded-full object-cover border-4 border-cyan-400 mb-8 shadow-lg"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-cyan-400">Pooja Meda</span>
      </motion.h1>

      <p className="text-2xl text-gray-300 mb-6">
        Aspiring Python Developer | AI/ML Enthusiast
      </p>

      <p className="max-w-2xl text-lg text-gray-400 mb-8">
        Passionate about building intelligent applications, solving real-world
        problems using Python, Machine Learning, Data Analytics, and Web Development.
      </p>

      <a
        href="https://drive.google.com/file/d/1QKniULd5F9VnjXzU6KdX1cUz25Bupstk/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold mb-8 hover:scale-105 transition"
      >
        View Resume
      </a>

      <div className="flex gap-8 text-4xl">
        <a
          href="https://github.com/poojameda747"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-cyan-400 transition" />
        </a>

        <a href="mailto:poojameda747@gmail.com">
          <FaEnvelope className="hover:text-cyan-400 transition" />
        </a>
      </div>
    </section>
  )
}

export default Hero