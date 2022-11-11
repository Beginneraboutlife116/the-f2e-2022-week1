import Characters from "./components/characters"
import { Header } from "./components/header"
import Sidebar from "./components/sidebar"
import SectionOne from "./pages/section-one"
import SectionTwo from "./pages/section-two"
import SectionThree from "./pages/section-three"

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
    </main>
  )
}

export default App
