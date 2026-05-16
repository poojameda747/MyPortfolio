import React from 'react'
import { FaProjectDiagram, FaGithub } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: "Enterprise Document Retrieval System with Hybrid Search RAG",
      desc: "Built an intelligent document retrieval system using Hybrid Search and Retrieval-Augmented Generation for enterprise knowledge access.",
      github: "https://github.com/poojameda747/Enterprise-Document-Retrieval-System-with-Hybrid-Search-RAG.git"
    },
    {
      title: "Tesla Stock Price Prediction",
      desc: "Built a machine learning model to predict Tesla stock prices using historical stock market data.",
      github: "https://github.com/poojameda747/Tesla_predictor.git"
    },
    {
      title: "PhonePe Transaction Insights Dashboard",
      desc: "Created an interactive dashboard to analyze PhonePe transaction data.",
      github: "https://github.com/poojameda747/phonepe-transaction-insights.git"
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <FaProjectDiagram className="text-cyan-400 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-5">
              {project.desc}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-400 text-black px-5 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <FaGithub />
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects