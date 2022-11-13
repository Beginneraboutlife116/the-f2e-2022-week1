import { BannerHeader } from "../../components/header"
import logoBlockStudio from "../../assets/logo/logo_blockstudio.svg"
import logoKdan from "../../assets/logo/logo_kdan.svg"
import logoTitanSoft from "../../assets/logo/logo_titansoft.svg"
import treeLeft from "../../assets/bg/bg_decorate_04.png"
import treeRight from "../../assets/bg/bg_decorate_08.png"

import style from "./style.module.scss"

export default function SectionSeven() {
  return (
    <section className={"section " + style.section}>
      <BannerHeader title="贊助單位" className={style["banner-header"]} />
      <ul className={style.list}>
        <li className={style.list__item}>
          <a
            href="https://blockstudio.tw/"
            target="blank"
            className={style.button}>
            <img src={logoBlockStudio} alt="版塊設計" />
          </a>
          <a
            href="https://blockstudio.tw/"
            target="blank"
            className={style.pill}>
            #版塊設計
          </a>
        </li>
        <li className={style.list__item}>
          <a
            href="https://www.kdanmobile.com/zh-tw"
            target="blank"
            className={style.button}>
            <img src={logoKdan} alt="凱鈿行動科技" />
          </a>
          <a
            href="https://www.kdanmobile.com/zh-tw"
            target="blank"
            className={style.pill}>
            #凱鈿行動科技
          </a>
        </li>
        <li className={style.list__item}>
          <a
            href="https://titansoft.com/tw"
            target="blank"
            className={style.button}>
            <img src={logoTitanSoft} alt="鈦坦科技" />
          </a>
          <a
            href="https://titansoft.com/tw"
            target="blank"
            className={style.pill}>
            #鈦坦科技
          </a>
        </li>
      </ul>
      <div className={style.trees}>
        <img src={treeLeft} alt="裝飾 - 樹" className={style.trees__left} />
        <img src={treeRight} alt="裝飾 - 樹" className={style.trees__right} />
      </div>
    </section>
  )
}
