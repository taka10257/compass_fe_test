import React from 'react'
import Image from 'next/image'
import styles from './PageTitle.module.sass'

type PageTitleProps = {
  title: string
  imageSrc: string
  imageAlt?: string
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.imageSrc}
          alt={props.imageAlt || ''}
          width={32}
          height={32}
        />
      </div>
      <h1 className={styles.title}>{props.title}</h1>
    </div>
  )
}
