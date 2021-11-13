import React from 'react'
import Image from 'next/image'
import styles from './AppHeader.module.sass'

export default function AppHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Image
          src={'/images/logo-title.svg'}
          alt={'Qubena Manager'}
          width={276}
          height={32}
        />
      </h1>
      <div className={styles.title}>
        <p>アカウント管理</p>
      </div>
      <div className={styles.account}>
        <Image
          className={styles.account_logo}
          src={'/images/icon-account.svg'}
          alt={''}
          width={32}
          height={32}
        />
        <p className={styles.account_name}>因幡深雪</p>
      </div>
    </div>
  )
}
