import React, { ReactNode } from 'react'
import MetaHead from '../atoms/MetaHead'
import AppHeader from '../organisms/header/AppHeader'
import styles from './Layout.module.sass'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MetaHead />
      <div className={styles.app_head}>
        <AppHeader />
      </div>
      <div className={styles.contents}>{children}</div>
    </>
  )
}
