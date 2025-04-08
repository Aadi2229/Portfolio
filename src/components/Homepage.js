import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="container">
      <h1 className="title">Hi, I&apos;m Aaditya Raj</h1>
      <p className="subtitle">Data Engineer | Azure | Snowflake | Databricks | SQL | Python</p>
      <a href="/Aaditya_Raj-DE.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume-button">Download Resume</button>
      </a>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I&apos;m a Data Engineer at WNS Global Services with hands-on experience in tools like Azure Data Factory, Snowflake,
          Databricks, PySpark, Airflow, and SQL. I’ve also interned at Intel as an AI & Data Science Intern. 
          I love designing scalable data pipelines and solving data problems with efficient solutions.
        </p>
        <p>
          Certified as an Azure Data Engineer (DP-203) and completed IBM&apos;s Data Science Specialization.
          Passionate about data, performance optimization, and building cool stuff 🚀.
        </p>
      </section>

      <section className="experience-section">
        <h2>Experience</h2>

        <div className="experience-card">
          <h3>WNS Global Services – Data Engineer</h3>
          <p className="duration">May 2024 – Present</p>
          <ul>
            <li>Designed and deployed scalable ETL pipelines using Azure Data Factory and Apache Airflow.</li>
            <li>Built modular data workflows in Databricks using PySpark, processing millions of records daily.</li>
            <li>Managed data integration between Snowflake, SQL Server, and third-party APIs for real-time reporting.</li>
            <li>Developed custom data quality checks and automated validation pipelines to ensure clean ingestions.</li>
            <li>Collaborated with cross-functional teams to deliver insights via Power BI dashboards, improving data visibility.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Intel Corporation – AI & Data Science Intern</h3>
          <p className="duration">Jan 2023 – Jun 2023</p>
          <ul>
            <li>Engineered machine learning models for predictive analytics using scikit-learn and pandas.</li>
            <li>Processed large datasets using PySpark on cloud-based platforms to enable fast experimentation.</li>
            <li>Built automated pipelines for data collection, cleaning, and feature engineering using Python scripts.</li>
            <li>Contributed to a real-time feedback analysis system integrated with dashboards and alerts.</li>
            <li>Documented models and pipelines for handover to full-time engineering and analytics teams.</li>
          </ul>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Real-Time Customer Feedback Analysis</h3>
          <p><strong>Tech Stack:</strong> Python, Azure, Kafka, NiFi, PySpark, Power BI</p>
          <ul>
            <li>Built a real-time data pipeline for ingesting and analyzing customer feedback.</li>
            <li>Used NLP with PySpark for sentiment analysis and visualized results via Power BI.</li>
            <li>Improved customer retention through real-time insights and alerts.</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>E-Commerce Sales and Inventory Data Pipeline</h3>
          <p><strong>Tech Stack:</strong> SQL, Airflow, ADF, Databricks, Snowflake, Python</p>
          <ul>
            <li>Created an automated ETL system to centralize and clean sales/inventory data.</li>
            <li>Scheduled data loads with Airflow and stored insights in Snowflake.</li>
            <li>Enabled 25% better inventory predictions through advanced analytics.</li>
          </ul>
        </div>
      </section>

      <section className="skills-section">
        <h2>Tech Stack & Tools</h2>
        <div className="skills-grid">
          <div className="skill-card">Python</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">Azure Data Factory</div>
          <div className="skill-card">Databricks</div>
          <div className="skill-card">Snowflake</div>
          <div className="skill-card">Apache Airflow</div>
          <div className="skill-card">Apache NiFi</div>
          <div className="skill-card">Apache Spark</div>
          <div className="skill-card">Hadoop</div>
          <div className="skill-card">Power BI</div>
          <div className="skill-card">Azure Synapse</div>
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        <ul>
          <li>🎓 Microsoft Certified: Azure Data Engineer Associate (DP-203)</li>
          <li>📜 IBM Data Science Professional Specialization</li>
        </ul>
      </section>

     
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Let’s connect! Reach out via:</p>
        <div className="contact-links">
          <a href="mailto:aadiraj19714@example.com" target="_blank">📧 Email</a>
          <a href="https://www.linkedin.com/in/aaditya-raj-71ba43216" target="_blank">🔗 LinkedIn</a>
          <a href="https://github.com/Aadi2229" target="_blank">💻 GitHub</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {year} Aaditya Raj | Data Engineer</p>
      </footer>
    </div>
  );
};

export default HomePage;
