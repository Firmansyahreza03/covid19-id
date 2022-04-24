import React from "react";
import maps from "../assets/idmaps.png";
import "./SecondPage.css";

function SecondPage() {
  return (
    <div className="flex-pages-2">
      <div className="map-fg">
        <img src={maps} alt="Peta Indonesia" width={500} />
      </div>
      <div className="desc-id">
        <h2>Covid-19 in Indonesia</h2>
        <p>
          Covid-19 entered Indonesia for the first time in early March 2020. The
          entry of the virus was marked by the discovery of the first patient in
          Depok, West Java. After the discovery of the first case, it began to
          spread to many officers who took care of the patient, until its peak
          in 2020-2021 Indonesia was in a critical condition because of the
          large number of victims caused by COVID-19. Fortunately, in 2022 a
          vaccine has begun to be found and Indonesian citizens have been
          vaccinated so that they can suppress the spread of the virus
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
