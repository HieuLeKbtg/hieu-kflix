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
import { ContentStates, ImageConfigs } from 'src/types'

type SlideRowsProps = {
    category: 'series' | 'films'
    imageConfigs: ImageConfigs
    data: ContentStates[]
}

const DEFAULT_ITEM: ContentStates = {
    id: -1,
    title: '',
    description: '',
    backdrop_path: '',
    poster_path: '',
    genres: []
}

const SlideRows = (props: SlideRowsProps) => {
    const { category, imageConfigs, data } = props
    const [item, setItem] = useState<ContentStates>(DEFAULT_ITEM)

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
                <Card
                    onClick={() => {
                        setItem(slideItem)
                    }}
                    key={slideItem.id}
                >
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
                </Card>
            ))}

            {item.id !== -1 ? (
                <MainCardFeature
                    genres={item.genres}
                    item={item}
                    url={`${imageConfigs.secure_base_url}/original/${item.poster_path}`}
                    onClose={() => setItem(DEFAULT_ITEM)}
                >
                    <Player>
                        <PlayerButton onClick={() => getVideokey(item.id)} />
                        {videoKey ? (
                            <PlayerVideo
                                src={`https://www.youtube.com/embed/${videoKey}`}
                            />
                        ) : null}
                    </Player>
                </MainCardFeature>
            ) : null}
        </CardGroup>
    )
}

export default SlideRows
