import logo from "../../assets/logo/logo.svg"
import icUser from "../../assets/ic/users.png"
import style from "./style.module.scss"

export default function SectionOne() {
  return (
    <section className={style.one}>
      <img src={logo} alt="logo" className={style.logo}></img>
      <h1 className={style.title}>互動式網頁設計</h1>
      <ul className={style.list}>
        <li>
          <h4 className={style.list__title}>前端工程師</h4>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>920</strong>
          </div>
        </li>
        <li>
          <h4 className={style.list__title}>UI設計師</h4>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>110</strong>
          </div>
        </li>
        <li>
          <h4 className={style.list__title}>團體組</h4>
          <div className={style.list__banner}>
            <img src={icUser} alt="users icon"></img>
            <strong>41</strong>
          </div>
        </li>
      </ul>
    </section>
  )
}
