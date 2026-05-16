import React from 'react'

import { FaBriefcase, FaCertificate} from 'react-icons/fa'

function Internship() {
  const internshipProjects = [
    {
      title: "Tesla Stock Price Prediction",
      duration: "15 Mar 2026 – 30 Mar 2026",
      month: "2 Weeks",
      tech: "Python, Pandas, NumPy, Scikit-learn, Matplotlib",
      desc: "Built a machine learning model to predict Tesla stock prices using historical stock market data and predictive analytics."
    },
    {
      title: "Mental Health Survey Analysis",
      duration: "1 Apr 2026 – 10 Apr 2026",
      month: "10 Days",
      tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
      desc: "Analyzed mental health survey datasets to identify trends, patterns, and insights using Python data analysis tools."
    },
    {
      title: "Real Estate Investment Advisor",
      duration: "11 Apr 2026 – 30 Apr 2026",
      month: "3 Weeks",
      tech: "Python, Machine Learning, Streamlit, Pandas, Scikit-learn",
      desc: "Developed a smart advisory system to help users make better real estate investment decisions using data-driven analysis."
    },
    {
      title: "PhonePe Transaction Insights Dashboard",
      duration: "1 May 2026 – 15 May 2026",
      month: "15 Days",
      tech: "Python, SQL, Streamlit, Plotly, Pandas",
      desc: "Created an interactive dashboard to analyze PhonePe transaction data with insights on users, transactions, and growth trends."
    }
  ]

  return (
    <section
      id="internship"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">
        Internship Experience
      </h2>
    <div className="mb-10">
  <a
    href="https://drive.google.com/file/d/1cfRymaQj-F8M6Oxr-Hxq-UMgyRM5Ze-f/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
  >
    <FaCertificate />
    View Internship Certificate
  </a>
</div>
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg max-w-6xl w-full mb-12">
        <div className="flex items-start gap-4">
          <FaBriefcase className="text-cyan-400 text-3xl mt-1" />

          <div>
            <h3 className="text-2xl font-semibold text-white">
              AI/ML Intern – Innovexis Tech
            </h3>

            <p className="text-gray-300 mt-2">
              Duration: 15 Mar 2026 – 15 May 2026 (2 Months)
            </p>

            <p className="text-gray-400 mt-3">
              Worked on multiple AI/ML and data analytics projects involving prediction systems, dashboards, and survey analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
        {internshipProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Duration:</span> {project.duration}
            </p>

            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-white">Timeline:</span> {project.month}
            </p>

            <p className="text-gray-300 mb-3">
              <span className="font-semibold text-white">Tech Stack:</span> {project.tech}
            </p>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Internship