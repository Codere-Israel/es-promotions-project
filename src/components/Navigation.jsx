import { observer } from "mobx-react";
import React, { useState } from "react";
import myStore from "../mobX/myStore";

const Navigation = observer(({ isVip }) => {
  console.log(isVip);

  const navs = [
    { type: "rollerStars" },
    { type: "todos" },
    { type: "deportes" },
    { type: "casino" },
    { type: "vip" },
  ];

  return (
    <div className="navigator w-100">
      <div className="d-flex justify-content-center align-items-center">
        {navs.slice(0, !isVip ? -1 : navs.length).map((nav, i) => (
          <div
            datatype={nav.type}
            className={`navigator-item object-fit-cover tab-${
              myStore.type !== nav.type ? "in" : ""
            }active d-flex flex-column gap-2 align-items-center`}
            onClick={() => myStore.updateType(nav.type)}
            key={i}
          >
            <img
              className="object-object-fit-contain"
              width={34}
              height={34}
              alt={`${nav.type}-icon`}
              src={`https://www.codere.es/promotions-assets/${nav.type}.svg`}
            />
            <div className="text-capitalize">{nav.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Navigation;
