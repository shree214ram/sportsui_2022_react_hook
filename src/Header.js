
import style from "./Header.module.css";

function Header() {
  return (
    <div>
      <section class={`${style.menu} ${style.cidNav}`}>
        <nav class={`${style.navbar} ${style.navbardropdown}  ${style.navbarexpandlg}`}>
          <div class={style.navbarbrand}>
            <span class={style.navbar_logo}>
              <a href="https://mobirise.com/extensions/storem4/index.html">
                <img src="../images/logo.svg"></img>
              </a>
            </span>
          </div>
          <div class={`${style.navbar_collapse} ${style.collapse}`} id="navbarSupportedContent">
            <ul class={`${style.navbar_nav} ${style.nav_dropdown}`} data-app-modern-menu="true">
              <li class={`${style.nav_item}`}>
                <img width="20" height="22" src="../images/schedule.png"></img>
                <a class={`${style.nav_link} ${style.link} ${style.text_white} ${style.display_4}`} href="/schedule">schedule</a>
              </li>
              <li class={`${style.nav_item} ${style.dropdown}`}>
                <img width="20" height="22" src="../images/leaderboard.png"></img>
                <a class={`${style.nav_link} ${style.link} ${style.text_white} ${style.display_4}`} href="/leaderboard">Leaderboard</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
