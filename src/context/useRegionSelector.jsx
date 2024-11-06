import { useContext } from "react";
import { RegionContext } from "./RegionContext";

function useRegionSelector() {
  const context = useContext(RegionContext);
  const {
    region = "",
    updateRegion,
    regionForFilters = "",
    updateRegionForFilters,
    sharedRegionForFilters = "",
    updateSharedRegionForFilters,
    showInitialPopUp,
  } = context || {};

  return {
    region,
    updateRegion,
    regionForFilters,
    updateRegionForFilters,
    sharedRegionForFilters,
    updateSharedRegionForFilters,
    showInitialPopUp,
  };
}

export default useRegionSelector;
