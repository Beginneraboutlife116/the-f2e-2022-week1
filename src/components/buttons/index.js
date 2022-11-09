import style from "./style.module.scss"

export function UserButton() {
  return (
    <a target="blank" href="https://2022.thef2e.com/users">
      <button
        aria-label="go to the f2e users page"
        className={style.btn__user}></button>
    </a>
  )
}
