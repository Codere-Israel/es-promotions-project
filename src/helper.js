import promos from "./JSON/promos.json";

export function getPromo(name) {
  return promos.find(
    (promo) => promo.path.toLocaleLowerCase() === name.toLocaleLowerCase()
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

// http://localhost:5173/?authenticated=true&promoData=%7B%22isPromotable%22:true,%22promotableErrors%22:%5B%5D,%22registratedDate%22:%222019-09-03T13:40:02Z%22,%22successful%22:true%7D&promoList=%5B%7B%22promoId%22:%22ES100525VIPXSRKGF1%22,%22promoType%22:%22Sport%22%7D,%7B%22promoId%22:%22ES170525VIPXSRKGConciertoEdSheeran%22,%22promoType%22:%22Sport%22%7D%5D&vipstats=true,VIP2&verifiDocumental=Pending&isUserMadeFTD=true&segmentedClosed=OPTINX-test&vipEstado=yes&birthdate=1988-01-06T11:00:00Z&commercialCommunications=true&notverified30days=false&ispromotablevip=true&userOptinPossibility=open
