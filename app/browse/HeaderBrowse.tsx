'use client'

import { appRoutes } from 'app/routes'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
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

const HeaderBrowse = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const pathname = usePathname()

    // TODO: get user here
    const user = { photoURL: '', displayName: 'Hieu Le' }

    return (
        <Header src='joker1'>
            <HeaderFrame>
                <HeaderGroup>
                    <HeaderLogo
                        to={appRoutes.HOME}
                        src='/images/icons/logo.svg'
                        alt='Netflix'
                    />
                    <HeaderLink
                        active={pathname === '/series' ? 'true' : 'false'}
                        href='/series'
                    >
                        Series
                    </HeaderLink>
                    <HeaderLink
                        active={pathname === '/films' ? 'true' : 'false'}
                        href='films'
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
                                <HeaderLink href='#'>
                                    {user.displayName}
                                </HeaderLink>
                            </HeaderGroup>
                            <HeaderGroup>
                                <HeaderLink
                                    href='#'
                                    // onClick={() => {
                                    //     // firebase.auth().signOut()
                                    // }}
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
