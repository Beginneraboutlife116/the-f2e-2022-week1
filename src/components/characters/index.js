import characterF2e from "../../assets/character/character_f2e.gif"
import characterUi from "../../assets/character/character_ui.gif"
import characterTeam from "../../assets/character/character_team.gif"
import style from "./style.module.scss"

export default function Characters() {
  return (
    <div className={style.characters}>
      <div className={style.character}>
        <img src={characterF2e} alt="character f2e" />
      </div>
      <div className={style.character_middle}>
        <img src={characterUi} alt="character ui" />
      </div>
      <div className={style.character}>
        <img src={characterTeam} alt="character team" />
      </div>
    </div>
  )
}
