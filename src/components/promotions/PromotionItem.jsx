import { Button } from "react-bootstrap";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PromotionItem({ isOptined, promo }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="card promo-card border-0 ">
      <span
        data-type={`border-title-${promo.type}`}
        className="promo-title position-absolute text-white abs-center text-center mt-2 p-1"
      >
        {promo.title}
      </span>
      {isOptined && (
        <img
          width={36}
          className="optin-check m-1 position-absolute end-0"
          src="https://www.codere.es/PromosCalidad/img/v-logo.png"
          alt="optin-check"
        />
      )}
      <img className="rounded-top-3" src={promo?.image} alt={promo.name} />
      <div className="promo-card-footer d-flex flex-column w-100 rounded-bottom-3">
        <span className="text-white text-center m-auto w-75">
          {promo.offer}
        </span>
        <div
          style={{ gridTemplateColumns: "40% 55%" }}
          className="d-grid px-1 gap-2 w-100 justify-content-center pb-2"
        >
          <Button
            onClick={() => navigate(`/${promo.name}${location.search}`)}
            className="info-btn"
          >
            Mas Info
          </Button>
          <Button className="enter-btn">Iniciar sesión</Button>
        </div>
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
}
