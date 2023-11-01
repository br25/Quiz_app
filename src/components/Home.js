import React from 'react';

function Home() {
  return (
    <div className="home flex items-center justify-center" style={{ height: 'calc(100vh - 8rem)' }}>
      <div className="container mx-auto p-4 text-blue-200 text-center">
        <h1 className="text-8xl font-semibold">Quiz App</h1>
        <p className='m-4 text-red-400 text-xl'>Click here to start the exam</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default Home;
