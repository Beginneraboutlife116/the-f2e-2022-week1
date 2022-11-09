import characterF2e from "../../assets/character/character_f2e.gif"
import characterUi from "../../assets/character/character_ui.gif"
import characterTeam from "../../assets/character/character_team.gif"
import styles from "./style.module.scss"

export default function Characters() {
  // TODO: test gsap scrolling
  return (
    <div className={styles.characters}>
      <div>
        <img src={characterF2e} alt="character f2e" />
      </div>
      <div>
        <img src={characterUi} alt="character ui" />
      </div>
      <div>
        <img src={characterTeam} alt="character team" />
      </div>
    </div>
  )
}
