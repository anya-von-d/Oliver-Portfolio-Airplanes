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
          border-radius: 100px;
          opacity: 0.7;
          filter: blur(40px);
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 100px;
        }

        .cloud-1 {
          width: 200px;
          height: 80px;
          top: 10%;
          animation: float 60s infinite linear;
        }

        .cloud-1::before {
          width: 100px;
          height: 80px;
          top: -40px;
          left: 30px;
        }

        .cloud-1::after {
          width: 120px;
          height: 70px;
          top: -30px;
          left: 80px;
        }

        .cloud-2 {
          width: 180px;
          height: 70px;
          top: 30%;
          animation: float 50s infinite linear;
          animation-delay: -10s;
        }

        .cloud-2::before {
          width: 90px;
          height: 70px;
          top: -35px;
          left: 25px;
        }

        .cloud-2::after {
          width: 110px;
          height: 60px;
          top: -25px;
          left: 70px;
        }

        .cloud-3 {
          width: 220px;
          height: 90px;
          top: 50%;
          animation: float 70s infinite linear;
          animation-delay: -20s;
        }

        .cloud-3::before {
          width: 110px;
          height: 90px;
          top: -45px;
          left: 35px;
        }

        .cloud-3::after {
          width: 130px;
          height: 80px;
          top: -35px;
          left: 90px;
        }

        .cloud-4 {
          width: 160px;
          height: 65px;
          top: 70%;
          animation: float 55s infinite linear;
          animation-delay: -30s;
        }

        .cloud-4::before {
          width: 80px;
          height: 65px;
          top: -30px;
          left: 20px;
        }

        .cloud-4::after {
          width: 100px;
          height: 55px;
          top: -20px;
          left: 60px;
        }

        .cloud-5 {
          width: 190px;
          height: 75px;
          top: 85%;
          animation: float 65s infinite linear;
          animation-delay: -40s;
        }

        .cloud-5::before {
          width: 95px;
          height: 75px;
          top: -37px;
          left: 27px;
        }

        .cloud-5::after {
          width: 115px;
          height: 65px;
          top: -27px;
          left: 75px;
        }

        @keyframes float {
          0% {
            left: -300px;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
