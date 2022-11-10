import style from "./style.module.scss"
import { useState } from "react"

const data = [
  {
    href: "https://2022.thef2e.com/news",
    label: "關卡資訊",
    class: "btn__info"
  },
  {
    href: "https://2022.thef2e.com/works",
    label: "作品列表",
    class: "btn__list"
  },
  {
    href: "https://hexschool.tw/OsAcp",
    label: "攻略資源",
    class: "btn__strategy"
  },
  { href: "https://2022.thef2e.com/jobs", label: "求職專區", class: "btn__job" }
]

export default function Sidebar() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <aside
        className={`${style.sidebar} ${
          toggle ? style.sidebar_open : style.sidebar_close
        }`}>
        <nav>
          <ul className={style.list}>
            {data.map((data) => (
              <a href={data.href} target="blank" key={data.href}>
                <li className={style.list__item}>
                  <button
                    className={style[data.class]}
                    aria-label={data.label}></button>
                  <p>{data.label}</p>
                </li>
              </a>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => setToggle(!toggle)}
          aria-label="打開Sidebar"
          className={`${style.btn__toggle} ${
            toggle ? style.btn__toggle_open : style.btn__toggle_close
          }`}></button>
      </aside>
      <div className={style.backdrop}></div>
    </>
  )
}
