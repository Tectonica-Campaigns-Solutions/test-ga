import React from "react";
import { RegionProvider } from "./src/context/RegionContext";

export const wrapRootElement = ({ element }) => (
  <RegionProvider>{element}</RegionProvider>
);

export const onRouteUpdate = ({ location }) => {
  const REGION_DIMENSION = "region";

  const prevRegion = window.localStorage.getItem("region");
  const region = window.___region || prevRegion || "UK";

  // const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  // // const hasAcceptedCookies = cookies.some((cookie) => cookie.startsWith('acceptCookies='));
  // const hasAcceptedCookies = true;


    console.log(`Set ${region} for ${location.pathname}`);
// "G-HPB7SR9GY4",
    window.gtag("event", "page_view", {
      page_path: location.pathname,
      region: region,
      debug_mode: true
    });
  
};
