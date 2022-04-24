import React from "react";
import Homepage from "../pages/Homepage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import style from "./scroll.module.css";

function Scroll() {
  const pageHandlerOne = () => {
    const element = document.getElementById(`pages 1`);
    element.scrollIntoView();
  };
  const pageHandlerTwo = () => {
    const element = document.getElementById(`pages 2`);
    element.scrollIntoView();
  };
  const pageHandlerThree = () => {
    const element = document.getElementById(`pages 3`);
    element.scrollIntoView();
  };

  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.component}>
          <li onClick={pageHandlerOne} className={style.btn}>
            Introduction
          </li>
          <li onClick={pageHandlerTwo} className={style.btn}>
            Summary
          </li>
          <li onClick={pageHandlerThree} className={style.btn}>
            Variant
          </li>
        </ul>
      </nav>

      <div className={style.container}>
        <section className={style.one} id="pages 1">
          <Homepage />
        </section>
        <section className={style.two} id="pages 2">
          <SecondPage />
        </section>
        <section className={style.three} id="pages 3">
          <ThirdPage />
        </section>
      </div>
    </>
  );
}

export default Scroll;
