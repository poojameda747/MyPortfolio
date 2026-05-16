import React from 'react'
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        Contact Me
      </h2>

      <div className="bg-slate-800 p-10 rounded-2xl shadow-lg text-center space-y-6">
        <p className="flex items-center gap-3 text-xl justify-center">
          <FaEnvelope />
          <a href="mailto:poojameda747@gmail.com">
            poojameda747@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-3 text-xl justify-center">
          <FaPhone />
          <a href="tel:+919390953856">
            +91 9390953856
          </a>
        </p>

        <p className="flex items-center gap-3 text-xl justify-center">
          <FaGithub />
          <a
            href="https://github.com/poojameda747"
            target="_blank"
            rel="noreferrer"
          >
            github.com/poojameda747
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact