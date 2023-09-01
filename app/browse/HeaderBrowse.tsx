'use client'

import { appRoutes } from 'app/routes'
import React, { Dispatch, SetStateAction, useState } from 'react'
import {
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
    HeaderText
} from 'src/components'
import { CategoryType } from 'src/types'

type HeaderBrowseProps = {
    category: CategoryType
    onSetCategory: Dispatch<SetStateAction<string>>
}

const HeaderBrowse = (props: HeaderBrowseProps) => {
    const { category, onSetCategory } = props
    const [searchTerm, setSearchTerm] = useState<string>('')

    // TODO: get user here
    const user = { photoURL: '', displayName: 'Hieu Le' }

    return (
        <Header src='joker1' dontShowOnSmallViewPort>
            <HeaderFrame>
                <HeaderGroup>
                    <HeaderLogo
                        to={appRoutes.HOME}
                        src='/images/icons/logo.svg'
                        alt='Netflix'
                    />
                    <HeaderLink
                        active={category === 'series' ? 'true' : 'false'}
                        onClick={() => onSetCategory('series')}
                    >
                        Series
                    </HeaderLink>
                    <HeaderLink
                        active={category === 'films' ? 'true' : 'false'}
                        onClick={() => onSetCategory('films')}
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
                                    onClick={() => {
                                        // firebase.auth().signOut()
                                    }}
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
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks
                    connection as he walks the streets of Gotham City. Arthur
                    wears two masks -- the one he paints for his day job as a
                    clown, and the guise he projects in a futile attempt to feel
                    like he's part of the world around him.
                </HeaderText>
                <HeaderPlayButton>Play</HeaderPlayButton>
            </HeaderFeature>
        </Header>
    )
}

export default HeaderBrowse
