import questionOneMobile from "../../assets/main/question_1_m.png"
import questionOne from "../../assets/main/question_1.png"
import questionTwo from "../../assets/main/question_2.png"
import questionThreeMobile from "../../assets/main/question_3_m.png"
import questionThree from "../../assets/main/question_3.png"
import { BannerHeader } from "../../components/header"
import style from "./style.module.scss"

export default function SectionTwo() {
  return (
    <section>
      <BannerHeader title="你是否也有以下困擾？" />
      <section className={style.section}>
        <ul className={style.list}>
          <li>
            <p className={style.list__title}>羨慕別人的酷酷網頁動畫？</p>
            <picture>
              <source srcSet={questionOne} media="(min-width: 75em)" />
              <img src={questionOneMobile} alt="羨慕別人的酷酷網頁動畫？" />
            </picture>
          </li>
          <li>
            <p className={style.list__title}>滿足不了同事的許願？</p>
            <img src={questionTwo} alt="滿足不了同事的許願？" />
          </li>
          <li>
            <p className={style.list__title}>動畫技能樹太雜無從下手？</p>
            <picture>
              <source srcSet={questionThree} media="(min-width: 75em)" />
              <img src={questionThreeMobile} alt="動畫技能樹太雜無從下手？" />
            </picture>
          </li>
        </ul>
      </section>
    </section>
  )
}
