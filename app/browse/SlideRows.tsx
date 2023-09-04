import React from 'react'
import {
    Card,
    CardEntities,
    CardGroup,
    CardImage,
    CardMeta,
    CardSubTitle,
    CardText,
    CardTitle,
    MainCardFeature,
    MainCardItem,
    Player,
    PlayerButton,
    PlayerVideo
} from 'src/components'

// TODO: add type here
type SlideRowsProps = {
    slideRows: any[]
    category: string
}

const SlideRows = (props: SlideRowsProps) => {
    const { slideRows, category } = props

    return (
        <CardGroup>
            {slideRows.map((slideItem) => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <CardTitle>{slideItem.title}</CardTitle>
                    <CardEntities>
                        {slideItem.data.map((item) => (
                            <MainCardItem key={item.docId} item={item}>
                                <CardImage
                                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                />
                                <CardMeta>
                                    <CardSubTitle>{item.title}</CardSubTitle>
                                    <CardText>{item.description}</CardText>
                                </CardMeta>
                            </MainCardItem>
                        ))}
                    </CardEntities>
                    <MainCardFeature category={category}>
                        <Player>
                            <PlayerButton />
                            <PlayerVideo src='/videos/bunny.mp4' />
                        </Player>
                    </MainCardFeature>
                </Card>
            ))}
        </CardGroup>
    )
}

export default SlideRows
