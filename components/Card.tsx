import React from 'react'

import styles from './Card.module.css'

export type Cardprops = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function Card({ children, ...rest }: Cardprops) {
  return (
    <div className={styles.wrapper} {...rest}>
      {children}
    </div>
  )
}
