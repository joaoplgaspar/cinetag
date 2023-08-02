import styles from './ContainerCards.module.css'

export default function ContainerCards( { children } ) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}
