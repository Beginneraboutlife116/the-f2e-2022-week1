import { BannerHeader } from "../../components/header"
import week1 from "../../assets/main/week_1.svg"
import week2 from "../../assets/main/week_2.svg"
import week3 from "../../assets/main/week_3.svg"
import style from "./style.module.scss"

export default function SectionFour() {
  return (
    <section className="section">
      <BannerHeader title="年度最強合作，三大主題來襲" />
      <p className={style.title}>
        各路廠商強強聯手
        <br />
        共同設計出接地氣的網頁互動挑戰關卡
      </p>
      <ul className={style.list}>
        <li className={style.list__item}>
          <img className={style.picture} src={week1} alt="week 1 icon" />
          <section>
            <p className={style.week}>WEEK 1</p>
            <h3 className={style.list__title}>The F2E 活動網站設計</h3>
            <div className={style.info}>
              <p className={style.pill}>Parallax Scrolling</p>
              <a
                href="https://blockstudio.tw/"
                target="blank"
                className={style.pill}>
                #版塊設計
              </a>
              <a
                href="https://2022.thef2e.com/news/week1"
                target="blank"
                className={style.pill + " " + style.pill_invert}>
                查看關卡細節
              </a>
            </div>
          </section>
        </li>
        <li className={style.list__item}>
          <img className={style.picture} src={week2} alt="week 2 icon" />
          <section>
            <p className={style.week}>WEEK 2</p>
            <h3 className={style.list__title}>今晚，我想來點點簽</h3>
            <div className={style.info}>
              <p className={style.pill}>Canvas</p>
              <a
                href="https://www.kdanmobile.com/zh-tw"
                target="blank"
                className={style.pill}>
                #凱鈿行動科技
              </a>
              <a
                href="https://2022.thef2e.com/news/week2"
                target="blank"
                className={style.pill + " " + style.pill_invert}>
                查看關卡細節
              </a>
            </div>
          </section>
        </li>
        <li className={style.list__item}>
          <img className={style.picture} src={week3} alt="week 3 icon" />
          <section>
            <p className={style.week}>WEEK 3</p>
            <h3 className={style.list__title}>Scrum 新手村</h3>
            <div className={style.info}>
              <p className={style.pill}>JS draggable</p>
              <a
                href="https://titansoft.com/tw"
                target="blank"
                className={style.pill}>
                #鈦坦科技
              </a>
              <a
                href="https://2022.thef2e.com/news/week3"
                target="blank"
                className={style.pill + " " + style.pill_invert}>
                查看關卡細節
              </a>
            </div>
          </section>
        </li>
      </ul>
    </section>
  )
}
