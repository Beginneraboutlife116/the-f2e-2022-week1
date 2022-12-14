import Characters from "./components/characters"
import { Header } from "./components/header"
import Sidebar from "./components/sidebar"
import { SectionOne, logo } from "./pages/section-one"
import SectionTwo from "./pages/section-two"
import SectionThree from "./pages/section-three"
import SectionFour from "./pages/section-four"
import SectionFive from "./pages/section-five"
import SectionSix from "./pages/section-six"
import SectionSeven from "./pages/section-seven"
import { JoinHand, SignUpButton } from "./components/button"
import finish from "./assets/main/finish.svg"
import finishLineLeft from "./assets/main/finishLine_l.svg"
import finishLineRight from "./assets/main/finishLine_r.svg"
import { ReactComponent as Map } from "./assets/main/map.svg"
import mapNow from "./assets/main/map_now.gif"
import cloud from "./assets/bg/bg_decorate_03.png"
import picture from "./assets/bg/bg_decorate_07.png"

function App() {
  return (
    <main>
      <div className="map">
        <Map />
        <img src={mapNow} alt="現在的位置" className="map__now" />
      </div>
      <a
        target="blank"
        href="https://2022.thef2e.com/users"
        className="btn__user">
        <button aria-label="前往F2E個人頁面"></button>
      </a>
      <Sidebar />
      <Header />
      <Characters />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <section className="hero">
        <h2 className="hero__title">
          <p>區區修煉</p>
          <p>已經無法滿足了嗎？</p>
        </h2>
        <img src={cloud} alt="雲朵" className="hero__cloud" />
        <img src={picture} alt="圖" className="hero__picture" />
      </section>
      <SectionSix />
      <SectionSeven />
      <section className="decoration-section">
        <img src={finish} alt="終點線" className="finish" />
        <div className="finish-line">
          <img
            src={finishLineLeft}
            alt="紅線左"
            className="finish-line__left"
          />
          <img
            src={finishLineRight}
            alt="紅線右"
            className="finish-line__right"
          />
        </div>
      </section>
      <section className="cta">
        <div>
          <a href="https://2022.thef2e.com/" target="blank">
            <img src={logo} alt="Logo" className="cta__logo" />
          </a>
          <a
            href="https://2022.thef2e.com/signup"
            target="blank"
            className="sign-up-button">
            <JoinHand />
            <SignUpButton />
          </a>
          <h2>立即報名</h2>
        </div>
      </section>
      <div className="stick-sign-up">
        <p>JOIN</p>
        <JoinHand />
        <a href="https://2022.thef2e.com/signup" target="blank">
          <SignUpButton />
        </a>
      </div>
    </main>
  )
}

export default App
