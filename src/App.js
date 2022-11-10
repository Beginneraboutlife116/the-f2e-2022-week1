import Characters from "./components/characters"
import Header from "./components/header"
import SectionOne from "./pages/section-one"
import Sidebar from "./components/sidebar"

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
    </main>
  )
}

export default App
