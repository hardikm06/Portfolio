import React from "react";
// import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <meshStandardMaterial color="royalblue" wireframe />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="absolute text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hardik Mishra</h1>
          <p className="text-lg md:text-2xl">Aspiring Engineer | Software and Web Development</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          I am a dedicated Software Engineer with expertise in programming, web development, and database management. Passionate about adapting to new technologies and solving complex problems.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">Java</div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">C++</div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">JavaScript</div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">React.js</div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">MongoDB</div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">Docker</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Online Educational Platform</h3>
            <p className="text-gray-400">Developed a platform using HTML, CSS, and JavaScript to provide personalized course recommendations.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Food Donation System</h3>
            <p className="text-gray-400">Backend for food donation management using PHP and MySQL.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Online Voting System</h3>
            <p className="text-gray-400">Designed and developed a secure voting system in C++.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Certifications</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">IBM Full Stack Software Developer (Coursera)</h3>
            <p className="text-gray-400">Training in front-end, back-end, and cloud-native development.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Complete Interview Preparation</h3>
            <p className="text-gray-400">A placement-preparation course covering Java, C++, DSA, and more.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Cloud Computing</h3>
            <p className="text-gray-400">NPTEL course covering cloud computing fundamentals and challenges.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Education</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Lovely Professional University, Punjab</h3>
            <p className="text-gray-400">Bachelor of Technology - Computer Science and Engineering (2022 - Current)<br />CGPA: 7.64</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">ALLEN Career Institute, Rajasthan</h3>
            <p className="text-gray-400">Joint Entrance Examination (2021 - 2022)<br />Percentile: 92.42</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Saraswati Hr. Sec. School, Madhya Pradesh</h3>
            <p className="text-gray-400">Higher Secondary Examination (2019 - 2021)<br />Percentage: 98.2</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">Feel free to reach out for opportunities or collaborations!</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:hm658044@gmail.com" className="text-blue-500">Email</a>
          <a href="https://linkedin.com/in/hardikm06" className="text-blue-500">LinkedIn</a>
          <a href="https://github.com/hardikm06" className="text-blue-500">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
