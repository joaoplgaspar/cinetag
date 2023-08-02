import styles from './Card.module.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useFavoritoContext } from 'contextos/Favoritos'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext()
  const ehFavorito = favorito.some((fav) => fav.id === id)

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <div className={styles.capa__container}>
          <img src={capa} alt={titulo} />
        </div>
        <h2>{titulo}</h2>
      </Link>
      {!ehFavorito ?
        <MdFavoriteBorder
          className={styles.favoritar}
          onClick={(event) => {
            adicionarFavorito({ id, titulo, capa })
          }}
        /> :
        <MdFavorite
          className={styles.favoritar}
          onClick={(event) => {
            adicionarFavorito({ id, titulo, capa })
          }}
        />}
    </div>
  )
}
