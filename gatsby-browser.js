import React from "react";
import { RegionProvider } from "./src/context/RegionContext";

export const wrapRootElement = ({ element }) => (
  <RegionProvider>{element}</RegionProvider>
);

