import React from "react";
import useRegionSelector from "../context/useRegionSelector";
import { Link } from "gatsby";

const AboutUs = () => {
  const { region, updateRegion } = useRegionSelector();

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#000",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#FFF" }}
          activeStyle={{ fontWeight: 900, textDecoration: "underline" }}
        >
          HOMEPAGE
        </Link>

        <Link
          to="/about-us"
          style={{ textDecoration: "none", color: "#FFF" }}
          activeStyle={{ fontWeight: 900, textDecoration: "underline" }}
        >
          About us
        </Link>
      </nav>
      <h1>About us page. Region: {region}</h1>

      <section>
        <h3>Update region:</h3>
        <div style={{ display: "flex", gap: "30px" }}>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
              background: "#eee",
              padding: "12px",
            }}
            onClick={() => updateRegion("UK")}
          >
            UK
          </span>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
              background: "#eee",
              padding: "12px",
            }}
            onClick={() => updateRegion("EU")}
          >
            EU
          </span>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
              background: "#eee",
              padding: "12px",
            }}
            onClick={() => updateRegion("GLOBAL")}
          >
            Global
          </span>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
