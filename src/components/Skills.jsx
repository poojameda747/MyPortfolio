import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
  const skills = [
    "Python", "FastAPI",
    "NLP", "LLMs / RAG",
    "MongoDB", "MySQL",
    "HTML", "CSS",
    "Streamlit", "GitHub",
    "VS Code", "REST APIs",
    "FAISS", "Pandas",
    "NumPy", "Scikit-learn",
       "Plotly"
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-slate-800 px-8 py-6 rounded-2xl shadow-lg"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills