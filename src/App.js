import Characters from "./components/characters"
import { UserButton } from "./components/buttons"
import Header from "./components/header"
import SectionOne from "./pages/section-one"

function App() {
  return (
    <main>
      <Header />
      <UserButton />
      <Characters />
      <SectionOne />
    </main>
  )
}

export default App
