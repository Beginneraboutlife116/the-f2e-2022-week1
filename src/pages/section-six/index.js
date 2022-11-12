import { BannerHeader } from "../../components/header"
import awardTrophy from "../../assets/main/award_trophy.svg"
import awardLight from "../../assets/main/award_light.svg"
import style from "./style.module.scss"

export default function SectionSix() {
  return (
    <section className="section">
      <BannerHeader title="還有比賽等著你！" />
      <section className={style.section}>
        <div className={style.trophy}>
          <img src={awardLight} alt="光" />
          <img src={awardTrophy} alt="獎盃" />
        </div>
        <section className={style.section__inner}>
          <h3 className={style.title}>評審機制</h3>
          <p>
            初選： 將由六角學院前端、UI 評審進行第一波篩選。 決選：
            由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
            由評審進行直播公布名單！
          </p>
          <h3 className={style.title}>獎項</h3>
          <ol className={style.list}>
            <li>初選佳作 共六十位 數位獎狀</li>
            <li>
              個人企業獎 共六位 NTD <span>3,000</span> /位
            </li>
            <li>
              團體企業獎 共三組 NTD <span>10,000</span> /組
            </li>
            <li>以上皆提供完賽數位獎狀</li>
          </ol>
        </section>
      </section>
    </section>
  )
}
