import React from "react";
import "./ThirdPage.css";

import inggris from "../assets/inggris.jpg";
import brazil from "../assets/brazil.png";
import india from "../assets/india.png";

function ThirdPage() {
  return (
    <div className="flex-pages-3-column">
      <div className="flex-pages-2">
        <div className="fg-column">
          <img src={inggris} alt="Bendera Inggris" className="fg" />
        </div>
        <div className="desc-column">
          <h3 className="neonText">Variant Alpha</h3>
          <p>
            The Alpha variant SARS-CoV-2, also known as VOC-202012/01, is a
            variant of SARS-CoV-2, the virus that causes Covid-19. This variant
            is considered an important variant and is estimated to be 40%–80%
            more infectious than the original variant.
          </p>
        </div>
      </div>
      <div className="flex-pages-2">
        <div className="desc-column">
          <h3 className="neonText">Variant Delta</h3>
          <p>
            The Delta variant of SARS-CoV-2, also known as G/452R.V3, is a
            variant of lineage B.1.617 of SARS-CoV-2, the virus that causes
            Covid-19. This variant includes a variant that is considered
            important.
          </p>
        </div>
        <div className="fg-column">
          <img src={india} alt="" className="fg" />
        </div>
      </div>
      <div className="flex-pages-2">
        <div className="fg-column">
          <img src={brazil} alt="" className="fg" />
        </div>
        <div className="desc-column">
          <h3 className="neonText">Variant Zeta</h3>
          <p>
            The Zeta variant or lineage P.2, a sub-lineage of B.1.1.28, like
            P.1, was first detected in the state of Rio de Janeiro. The variant
            arises from the E484K mutation, but not the N501Y and K417T
            mutations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
