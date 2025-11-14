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
          background: white;
          border-radius: 200px;
          opacity: 0.6;
          filter: blur(60px);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 200px;
          filter: blur(30px);
        }

        .cloud-1 {
          width: 300px;
          height: 120px;
          top: 10%;
          animation: float 60s infinite linear;
        }

        .cloud-1::before {
          width: 150px;
          height: 120px;
          top: -60px;
          left: 40px;
          opacity: 0.8;
        }

        .cloud-1::after {
          width: 180px;
          height: 100px;
          top: -50px;
          left: 120px;
          opacity: 0.7;
        }

        .cloud-2 {
          width: 280px;
          height: 110px;
          top: 30%;
          animation: float 50s infinite linear;
          animation-delay: -10s;
        }

        .cloud-2::before {
          width: 140px;
          height: 110px;
          top: -55px;
          left: 35px;
          opacity: 0.8;
        }

        .cloud-2::after {
          width: 170px;
          height: 95px;
          top: -45px;
          left: 110px;
          opacity: 0.7;
        }

        .cloud-3 {
          width: 320px;
          height: 130px;
          top: 50%;
          animation: float 70s infinite linear;
          animation-delay: -20s;
        }

        .cloud-3::before {
          width: 160px;
          height: 130px;
          top: -65px;
          left: 45px;
          opacity: 0.8;
        }

        .cloud-3::after {
          width: 190px;
          height: 110px;
          top: -55px;
          left: 130px;
          opacity: 0.7;
        }

        .cloud-4 {
          width: 260px;
          height: 100px;
          top: 70%;
          animation: float 55s infinite linear;
          animation-delay: -30s;
        }

        .cloud-4::before {
          width: 130px;
          height: 100px;
          top: -50px;
          left: 30px;
          opacity: 0.8;
        }

        .cloud-4::after {
          width: 160px;
          height: 85px;
          top: -40px;
          left: 100px;
          opacity: 0.7;
        }

        .cloud-5 {
          width: 290px;
          height: 115px;
          top: 85%;
          animation: float 65s infinite linear;
          animation-delay: -40s;
        }

        .cloud-5::before {
          width: 145px;
          height: 115px;
          top: -57px;
          left: 37px;
          opacity: 0.8;
        }

        .cloud-5::after {
          width: 175px;
          height: 100px;
          top: -47px;
          left: 115px;
          opacity: 0.7;
        }

        @keyframes float {
          0% {
            left: -400px;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
