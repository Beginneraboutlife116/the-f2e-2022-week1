import { BannerHeader } from "../../components/header"
import { JoinHand, SignUpButton } from "../../components/button"
import dateStart from "../../assets/main/date_start.svg"
import dateUpload from "../../assets/main/date_upload.svg"
import dateWeekLine from "../../assets/main/date_weekLine 1.svg"
import style from "./style.module.scss"

export default function SectionFive() {
  return (
    <section className={style.section}>
      <BannerHeader title="重要時程" className={style["banner-header"]} />
      <ul className={style.list}>
        <li className={style.list__item}>
          <JoinHand />
          <SignUpButton />
          <h2 className={style.list__title}>SIGN UP</h2>
          <p className={style.pill}>10/13 - 11/6</p>
          <p className={style.detail}>截止前可修改報名組別</p>
        </li>
        <li className={style.list__item}>
          <img src={dateStart} alt="開賽時間" />
          <h2 className={style.list__title}>START</h2>
          <p className={style.pill}>10/31 - 11/28</p>
          <p className={style.detail}>10/31(一) UI、團體組開賽</p>
          <p className={style.detail}>11/7(一) 前端組開賽</p>
        </li>
        <li className={style.list__item}>
          <img src={dateUpload} alt="上傳截稿時間" />
          <h2 className={style.list__title}>UPLOAD</h2>
          <p className={style.pill}>10/31 - 11/28</p>
          <p className={style.detail}>依賽程登錄作品</p>
          <span>額外競賽：主題豐厚獎金等著你</span>
        </li>
      </ul>
      <div className={style["date-decoration"]}>
        <img
          src={dateWeekLine}
          alt="時間軸線"
          className={style["first-week"]}
        />
        <img
          src={dateWeekLine}
          alt="時間軸線"
          className={style["second-week"]}
        />
        <img
          src={dateWeekLine}
          alt="時間軸線"
          className={style["third-week"]}
        />
      </div>
    </section>
  )
}
