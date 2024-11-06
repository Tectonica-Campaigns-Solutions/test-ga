import React, { createContext, useState, useEffect } from "react";

const DEFAULT_REGION = "UK";
export const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [regionForFilters, setRegionForFilters] = useState(DEFAULT_REGION);
  const [sharedRegionForFilters, setSharedRegionForFilters] = useState(null);
  const [showInitialPopUp, setShowInitialPopUp] = useState(false);

  useEffect(() => {
    const savedRegion = localStorage.getItem("region");

    if (savedRegion !== null) {
      setRegion(savedRegion);
      setRegionForFilters(savedRegion);
      setSharedRegionForFilters(savedRegion);
    } else {
      setShowInitialPopUp(true);
    }
  }, []);

  useEffect(() => {
    window.___region = region;
  }, [region]);

  const updateRegion = (newRegion) => {
    setRegion(newRegion);
    setRegionForFilters(newRegion);
    setShowInitialPopUp(false);
    localStorage.setItem("region", newRegion);
  };

  const updateRegionForFilters = (newRegion) => {
    setRegionForFilters(newRegion);
  };

  const updateSharedRegionForFilters = (newRegion) => {
    setSharedRegionForFilters(newRegion);
  };

  return (
    <RegionContext.Provider
      value={{
        region,
        updateRegion,
        regionForFilters,
        updateRegionForFilters,
        sharedRegionForFilters,
        updateSharedRegionForFilters,
        showInitialPopUp,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};
