import React from "react";
import useRegionSelector from "../../context/useRegionSelector";
import { Link, navigate } from "gatsby";

const Index = () => {
  const { region, updateRegion } = useRegionSelector();

  const handleRegionChange = (newRegion) => {
    updateRegion(newRegion);
    navigate(`/${newRegion.toLowerCase()}`); // Navigate to a dynamic page based on the region
  };

  return (
    <div>
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
      <h1>Homepage. Region: {region}</h1>

      <section>
        <h3>Update region:</h3>
        <div style={{ display: "flex", gap: "30px" }}>
          {["UK", "EU", "GLOBAL"].map((r) => (
            <span
              key={r}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underline",
                background: "#eee",
                padding: "12px",
              }}
              onClick={() => handleRegionChange(r)}
            >
              {r}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
