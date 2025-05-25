import PromotionItem from "./PromotionItem";
import myStore from "../../mobX/myStore";
import { observer } from "mobx-react";

const Promotions = observer(({ optinedList, isVip, isLogged }) => {
  const promotions = [
    {
      id: "ES100525VIPXSRKGF1",
      type: "deportes",
      path: "primer-dep",
      title: "PRIMER DEPÓSITO DEL MES",
      offer: "Recibe fondos disponibles para Deportes y Casino",
      image:
        "https://www.codere.mx/library/Promotions/CRM/Deportes/GENERALES/NEWWB251000EXTRA/600x600-Promoition.jpg",
      dynamicButton: {
        loggedIn: { text: "Iniciar sesión", event: "" },
        loggedOut: { text: "Inscribirse", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },
    {
      id: "jdls",
      type: "casino",
      path: "jdls",
      title: "JUEGO DE LA SEMANA",
      offer: "Recibe 50 FD toda la semana",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/LionsMegaways2/600x600-Promoition.jpg",
      dynamicButton: {
        loggedIn: { text: "Registro", event: "" },
        loggedOut: { text: "Inscribirse", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },
    {
      id: "PAGO_ANTICIPADO",
      type: "vip",
      path: "pago-anticipado",
      title: "PAGO ANTICIPADO FÚTBOL",
      offer: "Juega a tu favorito y con ventaja de 2 goles ¡GANAS!",
      image:
        "https://www.codere.mx/library/Promotions/CRM/PAGO%20ANTICIPADO/NewFutbol/600x600-Promotion.jpg",
      dynamicButton: {
        loggedIn: { text: "Iniciar sesión", event: "" },
        loggedOut: { text: "Depositar", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },

    {
      id: "Juevesfeliz",
      type: "deportes",
      path: "Juevesfeliz",
      title: "Feliz jueves de combo",
      offer: "Recibe hasta $600 para jugar en casino y deportes",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/JuevesFeliz2.0/600x600-Promotion%20(2).jpg",
      dynamicButton: {
        loggedIn: { text: "Iniciar sesión", event: "" },
        loggedOut: { text: "Depositar", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },
    {
      id: "ES170525VIPXSRKGConciertoEdSheeran",
      type: "casino",
      path: "concierto-ed-sheeran",
      title: "Descubre Cazadores del Juego",
      offer: "Una nueva forma de jugar y vivir la expiencia Codere",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/CazadoresJuego2.0/600x600%20cazadores.jpg",
      dynamicButton: {
        loggedIn: { text: "Juega Ahora", event: "" },
        loggedOut: { text: "Inscribirse", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },
    {
      id: "Juevesfeliz",
      type: "deportes",
      path: "Juevesfeliz",
      title: "Feliz jueves de combo",
      offer: "Recibe hasta $600 para jugar en casino y deportes",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/JuevesFeliz2.0/600x600-Promotion%20(2).jpg",
      dynamicButton: {
        loggedIn: { text: "Juega Ahora", event: "" },
        loggedOut: { text: "Apuesta Ahora", event: "" },
      },
      schedules: { startDate: "", endDate: "" },
    },
  ];

  return (
    <div className="row d-flex justify-content-center w-75 m-auto gap-4 mt-4">
      <div className="text-black">
        <h1>is Logged? {isLogged.toString()}</h1>
        {isLogged && (
          <div className="d-flex align-items-center gap-4">
            <h1>Opt-in granted:</h1>
            {optinedList?.map((opt, i) => (
              <div key={i}>{opt.promoId}</div>
            ))}
          </div>
        )}
      </div>
      {promotions
        .filter((promo) => {
          if (!isVip && promo.type === "vip") return;
          else if (myStore.type === "todos") return promo;
          else return promo.type === myStore.type;
        })
        .map((promo, i) => (
          <div className="col-md-3 col-ms-12" key={i}>
            <PromotionItem
              isOptined={optinedList?.some(
                (optin) => optin.promoId === promo.id
              )}
              promo={promo}
              isLogged={isLogged}
            />
          </div>
        ))}
    </div>
  );
});

export default Promotions;
