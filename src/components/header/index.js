import logoText from "../../assets/logo/logo_text.svg"
import style from "./style.module.scss"

export default function Header() {
  return (
    <header className={style.header}>
      <a href="https://2022.thef2e.com/">
        {/* // TODO: 要利用picture的方式載入不同的圖片 */}
        <img
          src={logoText}
          alt="text logo"
          className={style.header__picture}></img>
      </a>
    </header>
  )
}
