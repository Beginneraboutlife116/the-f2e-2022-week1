import logo from "../../assets/logo/logo.svg"
import logoText from "../../assets/logo/logo_text.svg"
import start from "../../assets/main/start.svg"
import icUser from "../../assets/ic/users.svg"
import style from "./style.module.scss"

function SectionOne() {
  return (
    <section className={style.one}>
      <div className={style.signal}>
        <p className={style.signal__title}>READY ?</p>
        <div className={style.signal__frame}>
          <div className={style.signal__left}></div>
          <div className={style.signal__middle}></div>
          <div className={style.signal__right}></div>
        </div>
      </div>
      <picture>
        <source srcSet={logoText} media="(min-width: 75em)" />
        <img src={logo} alt="logo" className={style.logo}></img>
      </picture>
      <img src={start} alt="起跑線" className={style["start-picture"]} />
      <h1 className={style.title}>互動式網頁設計</h1>
      <ul className={style.list}>
        <li>
          <p className={style.list__title}>前端工程師</p>
          <div className={style.list__pill}>
            <img src={icUser} alt="users icon"></img>
            <span>920</span>
          </div>
        </li>
        <li>
          <p className={style.list__title}>UI設計師</p>
          <div className={style.list__pill}>
            <img src={icUser} alt="users icon"></img>
            <span>110</span>
          </div>
        </li>
        <li>
          <p className={style.list__title}>團體組</p>
          <div className={style.list__pill}>
            <img src={icUser} alt="users icon"></img>
            <span>41</span>
          </div>
        </li>
      </ul>
    </section>
  )
}

export { SectionOne, logo }
