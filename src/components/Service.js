import React from 'react';

function Service() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Services</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We provide a range of services to help you with your projects and
            development needs. Our expertise includes:
          </p>
          <ul className="list-disc text-gray-700 text-lg leading-relaxed pl-6 mt-4">
            <li>Backend Development with Python and Django</li>
            <li>API Development with Django Rest Framework</li>
            <li>Frontend Development with JavaScript and React</li>
            <li>Server-side Programming with Node.js</li>
            <li>API Development with FastAPI</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We also have experience working with various open-source projects and
            maintaining GitHub repositories. You can check out some of our projects
            and see our work.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            For a visual representation of our work, here are some images from our
            recent projects:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Add an image of your project */}
              <img
                src="./images/library_management.jpg"
                alt="Library Management"
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-sm">Library Management</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Add an image of your project */}
              <img
                src="./images/crypto.jpg"
                alt="CryptoCurrency Wallet"
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-sm">CryptoCurrency Wallet</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Add an image of your project */}
              <img
                src="./images/movie_server.jpg"
                alt="Movie Server"
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-sm">Movie Server</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              {/* Add an image of your project */}
              <img
                src="./images/bank_card.jpg"
                alt="Bank Card"
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="text-gray-700 text-sm">Bank Card</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            To explore our projects and get more information, you can visit our GitHub
            profile.
          </p>
          <a
            href="https://github.com/br25/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            View Our GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
