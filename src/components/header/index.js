import logoText from "../../assets/logo/logo_text.svg"
import logo from "../../assets/logo/logo.png"
import style from "./style.module.scss"

export function Header() {
  return (
    <header className={style.header__main}>
      <a href="https://2022.thef2e.com/" target="blank">
        <picture className={style.header__main_picture}>
          <source srcSet={logo} media="(min-width: 75em)" />
          <img src={logoText} alt="text logo"></img>
        </picture>
      </a>
    </header>
  )
}

export function BannerHeader({ title }) {
  return (
    <header className={style.header__banner}>
      <h3 className={style.header__banner_title}>{title}</h3>
    </header>
  )
}
