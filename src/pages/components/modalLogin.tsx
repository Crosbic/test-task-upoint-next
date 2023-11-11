import { CancelOutlined } from '@mui/icons-material'
import {
  Box,
  Dialog,
  FormControl,
  InputBase,
  styled,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'

import styles from './modalLogin.module.css'

const ModalLogin = (props: any) => {
  const TransperentBorderInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      backgroundColor: 'transparent',
      border: 'none',
    },
  }))

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      className={styles.dialog}
      classes={{ paper: styles.dialog }}
    >
      <Box className={styles.login_box} component="form">
        <div className={styles.login_box__close}>
          <CancelOutlined sx={{ cursor: 'pointer' }} onClick={props.onClose} />
        </div>
        <Typography variant="h4" className={styles.login_box__header}>
          Вход в аккаунт
        </Typography>
        <div className={styles.login_box__inputs_group}>
          <FormControl>
            <TransperentBorderInput
              placeholder="ВВЕДИТЕ ID..."
              className={styles.login_box__inputs_group__input_id}
            />
          </FormControl>
          <FormControl>
            <TransperentBorderInput
              placeholder="ВВЕДИТЕ ПАРОЛЬ..."
              className={styles.login_box__inputs_group__input_pass}
            />
          </FormControl>
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
    </Dialog>
  )
}

export default ModalLogin
