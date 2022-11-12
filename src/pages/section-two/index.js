import questionOneMobile from "../../assets/main/question_1_m.png"
import questionOne from "../../assets/main/question_1.png"
import questionTwo from "../../assets/main/question_2.png"
import questionThreeMobile from "../../assets/main/question_3_m.png"
import questionThree from "../../assets/main/question_3.png"
import { BannerHeader } from "../../components/header"
import brush from "../../assets/bg/bg_decorate_09.png"
import style from "./style.module.scss"

export default function SectionTwo() {
  return (
    <section className={"section " + style.section}>
      <BannerHeader title="你是否也有以下困擾？" className={style.margin} />
      <ul className={style.list}>
        <li>
          <p className={style.list__title}>羨慕別人的酷酷網頁動畫？</p>
          <picture className={style.picture}>
            <source srcSet={questionOne} media="(min-width: 75em)" />
            <img src={questionOneMobile} alt="羨慕別人的酷酷網頁動畫？" />
          </picture>
        </li>
        <li>
          <p className={style.list__title}>滿足不了同事的許願？</p>
          <img
            src={questionTwo}
            alt="滿足不了同事的許願？"
            className={style.picture}
          />
        </li>
        <li>
          <p className={style.list__title}>動畫技能樹太雜無從下手？</p>
          <picture className={style.picture}>
            <source srcSet={questionThree} media="(min-width: 75em)" />
            <img src={questionThreeMobile} alt="動畫技能樹太雜無從下手？" />
          </picture>
        </li>
      </ul>
      <div className={style.brush}>
        <img src={brush} alt="草" className={style.brush__left} />
        <img src={brush} alt="草" className={style.brush__right} />
      </div>
    </section>
  )
}
