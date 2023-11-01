import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are a dedicated team of professionals passionate about creating
            engaging and informative quizzes. Our mission is to provide a
            platform that challenges your intellect, expands your knowledge, and
            entertains you.
          </p>
          <br/>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            At Quiz App, we cover a wide range of topics and subjects, ensuring
            there's something for everyone. Whether you're looking to test your
            knowledge, learn something new, or simply have fun, our quizzes are
            designed for you.
          </p>
          <br/>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Thank you for choosing Quiz App. We're committed to providing you
            with an enjoyable and educational experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
