import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto p-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Feel free to get in touch with us for any inquiries, projects, or collaborations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            You can contact us through the following methods:
          </p>
          <ul className="list-disc text-gray-700 text-lg leading-relaxed pl-6 mt-4">
            <li>Email: md.ashrafulislamrobin12345@gmail.com</li>
            <li>Phone: +88 01949098869</li>
            <li>Address: Dakshinkhan, Dhaka-1230, Bangladesh</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            We're looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
