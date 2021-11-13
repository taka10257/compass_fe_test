import React, { useState } from 'react'
import Image from 'next/image'
import styles from './SearchInput.module.sass'

type SearchInputProps = {
  placeHolder: string
  searchHandler: (word: string) => void
}

export default function SearchInput(props: SearchInputProps) {
  const [word, setWord] = useState<string>('')
  const [changed, setChanged] = useState<boolean>(false)

  const callSearchHandler = () => {
    if (!changed) return
    setChanged(false)
    props.searchHandler(word)
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={'input'}
        placeholder={props.placeHolder}
        onChange={(e) => {
          setWord(e.currentTarget.value.toString())
          setChanged(true)
        }}
        onKeyPress={(e) => {
          if (e.key == 'Enter') callSearchHandler()
        }}
      />
      <div className={styles.icon}>
        <Image
          src={'/images/icon-search.svg'}
          alt={'検索'}
          width={24}
          height={24}
          onClick={() => callSearchHandler()}
        />
      </div>
    </div>
  )
}
