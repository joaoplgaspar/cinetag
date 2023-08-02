import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React from 'react'
import ContainerCards from 'components/ContainerCards'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Inicio() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/joaoplgaspar/cinetag-api/videos")
            .then(resp => resp.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <main>
            <Banner imagem={'home'} />
            <Titulo>
                <h2>Um lugar para guardar seus vídeos e filmes!</h2>
            </Titulo>
            <ContainerCards>
                <section>
                    {videos.map(video => {
                        return <Card {...video} key={video.id} />
                    })}
                </section>
            </ContainerCards>
        </main>
    )
}
