import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div  class={style.footer}>
      <span class={style.text}>API Version: 1.0</span>
    </div>
  );
}

export default Footer;