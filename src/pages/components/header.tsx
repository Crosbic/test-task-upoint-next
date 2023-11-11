import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src="/logo.png" alt="logo" width="213" height="17" />
        <div className={styles.button_group}>
          <Link href="/">
            <Typography>Обмен</Typography>
          </Link>
          <Link href="/">
            <Typography>Партнёрам</Typography>
          </Link>
          <Link href="/">
            <Typography>Резервы</Typography>
          </Link>
          <Link href="/">
            <Typography>Новости</Typography>
          </Link>
          <Link href="/">
            <Typography>Контакты</Typography>
          </Link>
        </div>
        <div className={styles.button_auth_group}>
          <Link href="/">
            <Typography className={styles.button_signin_text}>Вход</Typography>
          </Link>

          <Link href="/">
            <div className={styles.button_reg_border}>
              <Typography className={styles.button_reg}>Регистрация</Typography>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
