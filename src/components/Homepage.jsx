import Navigation from "./Navigation";
import { useSearchParams } from "react-router-dom";
import Promotions from "./promotions/Promotions";

export default function Homepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log([...searchParams.entries()]);

  const isLogged = [...searchParams.entries()].length > 1;

  const isVip = searchParams.get("vipEstado") === "yes";

  return (
    <>
      <Navigation isVip={isVip} />
      <Promotions
        optinedList={JSON.parse(searchParams.get("promoList"))}
        isVip={isVip}
        isLogged={isLogged}
      />
    </>
  );
}
