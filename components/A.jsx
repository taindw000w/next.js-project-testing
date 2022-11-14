import Link from "next/link";
import styles from "../styles/link.module.css"

export default function A({ text, href }) {
  return (
    <Link href={href}>
      <p className={styles['link']}>{text}</p>
    </Link>
  )
}
