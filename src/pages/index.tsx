import { CancelOutlined } from '@mui/icons-material'
import { Box, InputBase, styled, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const TransperentBorderInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      backgroundColor: 'transparent',
      border: 'none',
    },
  }))

  return (
    <>
      <Box className={styles.login_box}>
        <div className={styles.login_box__close}>
          <CancelOutlined sx={{ cursor: 'pointer' }} />
        </div>
        <Typography variant="h4" className={styles.login_box__header}>
          Вход в аккаунт
        </Typography>
        <div className={styles.login_box__inputs_group}>
          <TransperentBorderInput
            placeholder="ВВЕДИТЕ ID..."
            className={styles.login_box__inputs_group__input_id}
          />
          <TransperentBorderInput
            placeholder="ВВЕДИТЕ ПАРОЛЬ..."
            className={styles.login_box__inputs_group__input_pass}
          />
        </div>
        <div className={styles.login_box__buttons_group}>
          <Link href="/">
            <div className={styles.login_box__buttons_group__button_login_bg}>
              <Typography
                className={styles.login_box__buttons_group__button_login_text}
              >
                Вход
              </Typography>
            </div>
          </Link>
          <Typography
            className={styles.login_box__buttons_group__button_forgot_pass}
          >
            Не можете войти?
          </Typography>
        </div>
      </Box>
    </>
  )
}
