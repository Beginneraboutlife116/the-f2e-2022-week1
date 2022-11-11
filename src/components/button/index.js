import joinHand from '../../assets/btn/btn_joinHand.svg'
import style from './style.module.scss'

export function SignUpButton(props) {
  return (
    <button className={`${style["sign-up"]} ${props.className}`} aria-label="立即報名"></button>
  )
}

export function JoinHand(props) {
  return <img src={joinHand} alt="加入的手圖案" className={`${style["join-hand"]} ${props.className}`}/>
}