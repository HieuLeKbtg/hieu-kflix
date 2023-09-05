'use client'

import React, { useState } from 'react'
import {
    Card,
    CardEntities,
    CardGroup,
    CardImage,
    CardMeta,
    CardText,
    CardTitle,
    MainCardFeature,
    MainCardItem,
    Player,
    PlayerButton,
    PlayerVideo
} from 'src/components'
import { seriesServices } from 'src/services'
import { filmServices } from 'src/services/FilmServices'
import { Genres, ImageConfigs } from 'src/types'

type SlideRowsProps = {
    category: 'series' | 'films'
    imageConfigs: ImageConfigs
    data: {
        id: number
        title: string
        description: string
        backdrop_path: string
        poster_path: string
        genres: Genres[]
    }[]
}

const SlideRows = (props: SlideRowsProps) => {
    const { category, imageConfigs, data } = props
    const [videoKey, setVideoKey] = useState<string>('')

    const getVideokey = async (id: number) => {
        const videoDetail =
            category === 'films'
                ? await filmServices.getFilmKey(id)
                : await seriesServices.getSeriesKey(id)
        if (videoDetail?.results?.length) {
            setVideoKey(videoDetail.results[0]?.key)
        } else {
            setVideoKey('')
        }
    }

    return (
        <CardGroup
            flexDirection='row'
            flexWrap='wrap'
            justifyContent='space-evenly'
        >
            {data?.map((slideItem) => (
                <Card key={slideItem.id}>
                    <CardTitle>{slideItem.title}</CardTitle>
                    <CardEntities>
                        <MainCardItem key={slideItem.id} item={slideItem}>
                            <CardImage
                                src={`${imageConfigs.secure_base_url}/original/${slideItem.backdrop_path}`}
                            />
                            <CardMeta>
                                <CardText>{slideItem.description}</CardText>
                            </CardMeta>
                        </MainCardItem>
                    </CardEntities>
                    <MainCardFeature
                        genres={slideItem.genres}
                        url={`${imageConfigs.secure_base_url}/original/${slideItem.poster_path}`}
                    >
                        <Player>
                            <PlayerButton
                                onClick={() => getVideokey(slideItem.id)}
                            />
                            {videoKey ? (
                                <PlayerVideo
                                    src={`https://www.youtube.com/embed/${videoKey}`}
                                />
                            ) : null}
                        </Player>
                    </MainCardFeature>
                </Card>
            ))}
        </CardGroup>
    )
}

export default SlideRows
