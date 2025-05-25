import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPromo } from "../../helper";
import { Button, Collapse } from "react-bootstrap";

export default function PromoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const promoId = location.pathname.substring(1);
  const promo = getPromo(promoId);

  const [tycOpen, setTycOpen] = useState(false);

  return (
    <div className="promoPageBody min-vh-100">
      <div
        style={{ backgroundColor: "#252A30" }}
        className="w-50 m-auto p-3 d-flex flex-column min-vh-100"
      >
        <div
          onClick={() => navigate(`/${location.search}`)}
          className="position-absolute fs-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>atrás</span>
        </div>
        <h1 className="text-center fs-3">{promo.title}</h1>
        <img src={promo.hero} alt="" />

        <div className="steps-section mx-auto mt-3 fs-3">
          <h2 className="text-center">EMPIEZA A JUGAR EN 3 PASOS</h2>
          <div className="row justify-content-around">
            {promo.steps.map((step, i) => (
              <div className="col-4 d-flex align-items-center" key={i}>
                <span className="rounded-circle bg-primary px-3 py-1">
                  {" "}
                  {i + 1}{" "}
                </span>
                <div
                  className="d-flex flex-column ps-3"
                  // style={{ width: "auto" }}
                >
                  <div className="fs-5 fw-bold text-codere">{step.title}</div>
                  <p className="fs-7">{step.text}</p>
                </div>
                {i + 2 <= promo.steps.length && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="regis-section _m-auto text-center">
          <div>ELIGE TU BONO BIENVENIDA DE:</div>
          <Button className="mt-2 text-uppercase px-5 fs-5">Register</Button>
        </div>

        <div className="schedule-section d-flex align-items-center gap-3 justify-content-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="2"
              ry="2"
              stroke="#7ED321"
              stroke-width="2"
              fill="none"
            />

            <line
              x1="7"
              y1="2"
              x2="7"
              y2="7"
              stroke="#7ED321"
              stroke-width="2"
            />
            <line
              x1="17"
              y1="2"
              x2="17"
              y2="7"
              stroke="#7ED321"
              stroke-width="2"
            />

            <line
              x1="3"
              y1="10.6"
              x2="21"
              y2="10.6"
              stroke="#7ED321"
              stroke-width="2"
            />
          </svg>

          <div className="d-flex flex-column w-75">
            <span>Fecha de la promoción</span>
            <span>{promo.dateRangeText}</span>
          </div>
        </div>

        <div className="tyc-section text-center mt-4">
          <h3
            className="cursor-pointer fs-5"
            onClick={() => setTycOpen(!tycOpen)}
            aria-controls="example-fade-text"
            aria-expanded={tycOpen}
          >
            {tycOpen ? "-" : "+"} Términos y Condiciones
          </h3>
          <Collapse in={tycOpen}>
            <div
              className="collapse text-start"
              id="tyc-collapse"
              dangerouslySetInnerHTML={{ __html: promo.tyc }}
            />
          </Collapse>
        </div>
      </div>
    </div>
  );
}
