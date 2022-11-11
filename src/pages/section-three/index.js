import { BannerHeader } from "../../components/header"
import characterF2e from "../../assets/character/character_f2e.svg"
import characterUi from "../../assets/character/character_ui.svg"
import characterTeam from "../../assets/character/character_team.svg"
import { JoinHand, SignUpButton } from "../../components/button"
import style from "./style.module.scss"

export default function SectionThree() {
  return (
    <section className={style.section}>
      <BannerHeader title="本屆主題：互動式網頁設計？" />
      <h5 className={style.title}>以下兩個角色進行攜手合作</h5>
      <ul className={style.list}>
        <li className={style.list__item}>
          <img srcSet={characterF2e} alt="f2e icon" />
          <div className={style.cta}>
            <JoinHand className={style.cta__hand} />
            <a href="https://2022.thef2e.com/signup" target="blank">
              <SignUpButton className={style["btn__sign-up"]} />
            </a>
            <h4>前端工程師</h4>
          </div>
        </li>
        <li className={style.list__item}>
          <div className={style.cta}>
            <JoinHand className={style.cta__hand} />
            <a href="https://2022.thef2e.com/signup" target="blank">
              <SignUpButton className={style["btn__sign-up"]} />
            </a>
            <h4>UI設計師</h4>
          </div>
          <img srcSet={characterUi} alt="f2e icon" />
        </li>
        <li className={style.list__item}>
          <img srcSet={characterTeam} alt="f2e icon" />
          <div className={style.cta}>
            <JoinHand className={style.cta__hand} />
            <a href="https://2022.thef2e.com/signup" target="blank">
              <SignUpButton className={style["btn__sign-up"]} />
            </a>
            <h4>團體組(UI+前端)</h4>
          </div>
        </li>
      </ul>
    </section>
  )
}
