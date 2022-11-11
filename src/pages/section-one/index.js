import logo from "../../assets/logo/logo.svg"
import icUser from "../../assets/ic/users.svg"
import style from "./style.module.scss"

export default function SectionOne() {
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
      <img src={logo} alt="logo" className={style.logo}></img>
      <h1 className={style.title}>互動式網頁設計</h1>
      <ul className={style.list}>
        <li>
          <p className={style.list__title}>前端工程師</p>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>920</strong>
          </div>
        </li>
        <li>
          <p className={style.list__title}>UI設計師</p>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>110</strong>
          </div>
        </li>
        <li>
          <p className={style.list__title}>團體組</p>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>41</strong>
          </div>
        </li>
      </ul>
    </section>
  )
}
