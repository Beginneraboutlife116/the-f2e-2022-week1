import Characters from "./components/characters"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import SectionOne from "./pages/section-one"
import SectionTwo from "./pages/section-two"

function App() {
  return (
    <main>
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
    </main>
  )
}

export default App
