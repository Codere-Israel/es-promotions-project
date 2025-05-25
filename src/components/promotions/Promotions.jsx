import PromotionItem from "./PromotionItem";
import myStore from "../../mobX/myStore";
import { observer } from "mobx-react";

const Promotions = observer(({ optinedList }) => {
  console.log(optinedList);

  const promotions = [
    {
      id: "ES100525VIPXSRKGF1",
      type: "deportes",
      name: "MX010525OTAXSPDMPrimerDep",
      title: "PRIMER DEPÓSITO DEL MES",
      offer: "Recibe fondos disponibles para Deportes y Casino",
      image:
        "https://www.codere.mx/library/Promotions/CRM/Deportes/GENERALES/NEWWB251000EXTRA/600x600-Promoition.jpg",
    },
    {
      id: 2,
      type: "casino",
      name: "jdls",
      title: "JUEGO DE LA SEMANA",
      offer: "Recibe 50 FD toda la semana",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/LionsMegaways2/600x600-Promoition.jpg",
    },
    {
      id: 3,
      type: "deportes",
      name: "Juevesfeliz",
      title: "Feliz jueves de combo",
      offer: "Recibe hasta $600 para jugar en casino y deportes",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/JuevesFeliz2.0/600x600-Promotion%20(2).jpg",
    },
    {
      id: "ES170525VIPXSRKGConciertoEdSheeran",
      type: "casino",
      name: "cazadores",
      title: "Descubre Cazadores del Juego",
      offer: "Una nueva forma de jugar y vivir la expiencia Codere",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/CazadoresJuego2.0/600x600%20cazadores.jpg",
    },
    {
      id: 5,
      type: "deportes",
      name: "Juevesfeliz",
      title: "Feliz jueves de combo",
      offer: "Recibe hasta $600 para jugar en casino y deportes",
      image:
        "https://www.codere.mx/library/00Promo2022/Casino/NewPromoPage/JuevesFeliz2.0/600x600-Promotion%20(2).jpg",
    },
  ];

  return (
    <div className="row d-flex justify-content-center w-75 m-auto gap-4 mt-4">
      {promotions
        .filter((promo) => {
          if (myStore.type === "todos") return promo;
          else return promo.type === myStore.type;
        })
        .map((promo, i) => (
          <div className="col-md-3 col-ms-12" key={i}>
            <PromotionItem
              isOptined={optinedList.some(
                (optin) => optin.promoId === promo.id
              )}
              promo={promo}
            />
          </div>
        ))}
    </div>
  );
});

export default Promotions;
