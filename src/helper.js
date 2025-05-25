import promos from "./JSON/promos.json";

export function getPromo(name) {
  return promos.find(
    (promo) => promo.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
}

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
}
