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

function App() {
  return (
    <main>
      <a
        target="blank"
        href="https://2022.thef2e.com/users"
        className="btn__user">
        <button aria-label="前往F2E個人頁面"></button>
      </a>
      {/* // TODO: 要載擺上一個「立即報名」的按鈕 */}
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
      </section>
      <SectionSix />
      <SectionSeven />
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
      {/* <div className="stick-sign-up">
        <p>JOIN</p>
        <JoinHand />
        <a href="https://2022.thef2e.com/signup" target="blank">
          <SignUpButton />
        </a>
      </div> */}
    </main>
  )
}

export default App
