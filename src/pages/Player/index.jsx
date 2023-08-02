import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useState } from 'react'

export default function Player() {
    const [video, setVideo] = useState([])
    const parametros = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/joaoplgaspar/cinetag-api/videos?id=${parametros.id}`)
            .then(resp => resp.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [parametros])

    if (!video) {
        return (
            <NaoEncontrada />
        )
    }

    return (
        <main>
            <Banner imagem="player" />
            <Titulo>
                <h2>Player</h2>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.Titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </section>
        </main>
    )
}
