import styles from './Image.module.css'

export const Image = () => {
  return (
    <img
      className={styles.image}
      width={300}
      height={200}
      src="https://placehold.co/300x200"
      alt=""
      loading="lazy"
    />
  )
}