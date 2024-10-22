import React from 'react';

const X = () => {
  return (
    <div>
      <style jsx>{`
        body {
            margin: 0;
            padding: 0;
            background-color: #000;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .text {
            font-size: 5rem;
            color: #fff;
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
            animation: pulsate 2s infinite alternate;
        }
        .shape {
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.5);
            animation: float 5s infinite ease-in-out;
        }
        .shape:nth-child(1) {
            top: 10%;
            left: 20%;
            animation-delay: 0s;
        }
        .shape:nth-child(2) {
            top: 70%;
            left: 80%;
            animation-delay: 1s;
        }
        .shape:nth-child(3) {
            top: 40%;
            left: 40%;
            animation-delay: 2s;
        }
        @keyframes pulsate {
            0% {
                text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
            }
            100% {
                text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
            }
        }
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
            }
            100% {
                transform: translateY(0) rotate(360deg);
            }
        }
      `}</style>
      <div className="container">
        <h1 className="text">coming soon</h1>
      </div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default X;
