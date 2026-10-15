
function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">
          LK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <p className="eyebrow">HELLO, I'M LAKSHAY</p>

          <h1>
            Data Science Student
            <br />
            <span>&amp; Python Developer</span>
          </h1>

          <p className="hero-description">
            I build practical solutions using Python,
            data analytics, machine learning, and AI.
            I enjoy turning data into meaningful insights.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section">
          <p className="eyebrow">GET TO KNOW ME</p>

          <h2 className="section-title">About Me</h2>

          <p className="about-description">
            I'm a BCA Data Science student interested in using
            Python, data analytics, and machine learning to
            solve practical problems. I enjoy developing
            projects that combine programming with data-driven
            insights.

            {" "}

            My goal is to build a career in data analytics
            and data science while continuously strengthening
            my technical and problem-solving skills.
          </p>

          <div className="about-cards">
            <article className="about-card">
              <h3>Education</h3>
              <p>BCA — Data Science</p>
            </article>

            <article className="about-card">
              <h3>Career Interests</h3>
              <p>Data Analytics &amp; Machine Learning</p>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <p className="eyebrow">WHAT I WORK WITH</p>

          <h2 className="section-title">Technical Skills</h2>

          <p className="skills-description">
            Technologies and tools I use to explore data,
            build projects, and develop my technical skills.
          </p>

          <div className="skills-grid">
            <article className="skill-card">
              <h3>Programming</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>Java</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Data Analysis</h3>
              <div className="skill-tags">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Plotly</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Database</h3>
              <div className="skill-tags">
                <span>SQL Basics</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Machine Learning &amp; AI</h3>
              <div className="skill-tags">
                <span>Scikit-learn</span>
                <span>Neural Networks</span>
                <span>Generative AI</span>
              </div>
            </article>

            <article className="skill-card">
              <h3>Tools &amp; Frameworks</h3>
              <div className="skill-tags">
                <span>Streamlit</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section">
          <p className="eyebrow">WHAT I'VE BUILT</p>

          <h2 className="section-title">Featured Projects</h2>

          <p className="projects-description">
            A selection of projects where I apply programming,
            data analysis, and machine learning to practical problems.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-number">
                01 / AI &amp; DATA ANALYTICS
              </div>

              <h3>InsightGPT Lite</h3>

              <p>
                An AI-powered data analytics platform that lets
                users upload datasets, explore data, create
                visualizations, and ask questions using
                AI-powered insights.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Streamlit</span>
                <span>Pandas</span>
                <span>RAG</span>
                <span>Gemini AI</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/Lakshay14ru/InsightGPT-Lite"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-number">
                02 / MACHINE LEARNING
              </div>

              <h3>Titanic Survival Prediction</h3>

              <p>
                A machine learning project that analyzes passenger
                information and predicts survival outcomes using
                classification algorithms and model evaluation.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>Scikit-learn</span>
                <span>KNN</span>
                <span>Decision Tree</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/Lakshay14ru"
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub ↗
              </a>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="contact-description">
            I'm looking to begin my professional career in data
            analytics and data science. If you have an opportunity
            or would like to discuss my projects, feel free to connect.
          </p>

          <div className="contact-links">
            
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshaykundariyayt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Email Me ↗
            </a>


            <a
              href="https://www.linkedin.com/in/lakshay-kundariya/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Lakshay14ru"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lakshay Kundariya
        </p>
        <p>Built with React &amp; CSS</p>
      </footer>
    </div>
  );
}

export default App;
