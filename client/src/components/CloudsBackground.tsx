export default function CloudsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
      <div className="cloud cloud-4" />
      <div className="cloud cloud-5" />
      <style>{`
        .cloud {
          position: absolute;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(40px);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          filter: blur(35px);
        }

        .cloud-1 {
          width: 400px;
          height: 200px;
          top: 10%;
          animation: float 60s infinite linear;
        }

        .cloud-1::before {
          width: 200px;
          height: 180px;
          top: -80px;
          left: 60px;
          opacity: 0.8;
        }

        .cloud-1::after {
          width: 250px;
          height: 160px;
          top: -60px;
          left: 150px;
          opacity: 0.7;
        }

        .cloud-2 {
          width: 380px;
          height: 180px;
          top: 30%;
          animation: float 50s infinite linear;
          animation-delay: -10s;
        }

        .cloud-2::before {
          width: 190px;
          height: 170px;
          top: -75px;
          left: 55px;
          opacity: 0.8;
        }

        .cloud-2::after {
          width: 230px;
          height: 150px;
          top: -55px;
          left: 140px;
          opacity: 0.7;
        }

        .cloud-3 {
          width: 420px;
          height: 210px;
          top: 50%;
          animation: float 70s infinite linear;
          animation-delay: -20s;
        }

        .cloud-3::before {
          width: 210px;
          height: 190px;
          top: -85px;
          left: 65px;
          opacity: 0.8;
        }

        .cloud-3::after {
          width: 260px;
          height: 170px;
          top: -65px;
          left: 160px;
          opacity: 0.7;
        }

        .cloud-4 {
          width: 360px;
          height: 170px;
          top: 70%;
          animation: float 55s infinite linear;
          animation-delay: -30s;
        }

        .cloud-4::before {
          width: 180px;
          height: 160px;
          top: -70px;
          left: 50px;
          opacity: 0.8;
        }

        .cloud-4::after {
          width: 220px;
          height: 140px;
          top: -50px;
          left: 130px;
          opacity: 0.7;
        }

        .cloud-5 {
          width: 390px;
          height: 185px;
          top: 85%;
          animation: float 65s infinite linear;
          animation-delay: -40s;
        }

        .cloud-5::before {
          width: 195px;
          height: 175px;
          top: -77px;
          left: 57px;
          opacity: 0.8;
        }

        .cloud-5::after {
          width: 240px;
          height: 155px;
          top: -57px;
          left: 145px;
          opacity: 0.7;
        }

        @keyframes float {
          0% {
            left: -500px;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
