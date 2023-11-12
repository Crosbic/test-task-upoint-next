import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import ModalLogin from '@/pages/components/modalLogin'

import styles from './header.module.css'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ModalLogin open={open} onClose={handleClose} />

      <div className={styles.wrapper}>
        <div className={styles.header_container}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width="213"
              height="17"
              className={styles.header_conteiner__logo}
            />
          </Link>
          <div className={styles.header_container__buttons_group}>
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
          <div className={styles.header_container__buttons_group__auth_group}>
            <div
              className={
                styles.header_container__buttons_group__auth_group__button_signin__bg
              }
              onClick={handleOpen}
            >
              <Typography
                className={
                  styles.header_container__buttons_group__auth_group__button_signin__text
                }
              >
                Вход
              </Typography>
            </div>
            <div
              className={
                styles.header_container__buttons_group__auth_group__button_reg_bg
              }
            >
              <Typography
                className={
                  styles.header_container__buttons_group__auth_group__button_reg_text
                }
              >
                Регистрация
              </Typography>
            </div>
          </div>
          <div className={styles.header_container__langauge_choice_container}>
            <Image
              src="/ru-icon-circle.png"
              alt="ru-icon"
              width="16"
              height="16"
            />
            <Typography
              className={
                styles.header_container__langauge_choice_container__text
              }
            >
              Русский &#9660;
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
