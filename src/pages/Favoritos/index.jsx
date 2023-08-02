import Banner from 'components/Banner'
import Card from 'components/Card'
import ContainerCards from 'components/ContainerCards'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const { favorito } = useFavoritoContext()

  return (
    <main>
      <Banner imagem="favoritos"/>
      <Titulo>
        <h2>Meus Favoritos</h2>
      </Titulo>
      <ContainerCards>
        <section>
          {favorito.map((fav) => <Card {...fav} key={fav.id}/>)}
        </section>
      </ContainerCards>
    </main>
  )
}
