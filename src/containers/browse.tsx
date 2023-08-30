'use client'

import { appRoutes } from 'app/routes'
import Fuse from 'fuse.js'
import React, { useContext, useEffect, useState } from 'react'

import {
    Card,
    CardEntities,
    CardGroup,
    CardImage,
    CardMeta,
    CardSubTitle,
    CardText,
    CardTitle,
    FooterContainer,
    Header,
    HeaderDropdown,
    HeaderFeature,
    HeaderFeatureCallOut,
    HeaderFrame,
    HeaderGroup,
    HeaderLink,
    HeaderLogo,
    HeaderPicture,
    HeaderPlayButton,
    HeaderProfile,
    HeaderSearch,
    HeaderText,
    Loading,
    MainCardFeature,
    MainCardItem,
    Player,
    PlayerButton,
    PlayerVideo,
    ReleaseBody
} from '../components'
import { FirebaseContext } from '../context/firebase'
import logo from '../logo.svg'
import { SelectProfileContainer } from './profiles'

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [slideRows, setSlideRows] = useState([])

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        // @ts-ignore
        // TOOD: add type here
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre']
        })
        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (
            slideRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm, slides, category, slideRows])

    // @ts-ignore
    // TOOD: add type here
    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <ReleaseBody />}

            <Header src='joker1' dontShowOnSmallViewPort>
                <HeaderFrame>
                    <HeaderGroup>
                        <HeaderLogo
                            to={appRoutes.HOME}
                            src={logo}
                            alt='Netflix'
                        />
                        <HeaderLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </HeaderLink>
                        <HeaderLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </HeaderLink>
                    </HeaderGroup>
                    <HeaderGroup>
                        <HeaderSearch
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <HeaderProfile>
                            <HeaderPicture src={user.photoURL} />
                            <HeaderDropdown>
                                <HeaderGroup>
                                    <HeaderPicture src={user.photoURL} />
                                    <HeaderLink>{user.displayName}</HeaderLink>
                                </HeaderGroup>
                                <HeaderGroup>
                                    <HeaderLink
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign out
                                    </HeaderLink>
                                </HeaderGroup>
                            </HeaderDropdown>
                        </HeaderProfile>
                    </HeaderGroup>
                </HeaderFrame>

                <HeaderFeature>
                    <HeaderFeatureCallOut>Watch Joker Now</HeaderFeatureCallOut>
                    <HeaderText>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </HeaderText>
                    <HeaderPlayButton>Play</HeaderPlayButton>
                </HeaderFeature>
            </Header>

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
                                        <CardSubTitle>
                                            {item.title}
                                        </CardSubTitle>
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
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
