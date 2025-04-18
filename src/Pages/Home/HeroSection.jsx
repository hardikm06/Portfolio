export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Hardik Mishra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A dedicated <i><b>Software Engineer</b></i> with in-depth knowledge of Computer Science and expertise in programming languages, web 
          development, and database management.
            <br /> I am passionate about developing software applications that are user-friendly and scalable.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
