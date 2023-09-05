'use client'

import { appRoutes } from 'app/routes'
import { usePathname, useRouter } from 'next/navigation'
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
import localStorageHelper from 'src/helpers/LocalStorageHelper'
import { User } from 'src/types'

const HeaderBrowse = () => {
    const router = useRouter()
    const pathname = usePathname()

    const user: User = localStorageHelper.getUserInfo()
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <Header src='joker1'>
            <>
                <HeaderFrame>
                    <HeaderGroup>
                        <HeaderLogo
                            to={appRoutes.HOME}
                            src='/images/icons/logo.svg'
                            alt='Netflix'
                        />
                        <HeaderLink
                            active={pathname === '/series'}
                            href='/series'
                        >
                            Series
                        </HeaderLink>
                        <HeaderLink active={pathname === '/films'} href='films'>
                            Films
                        </HeaderLink>
                    </HeaderGroup>
                    <HeaderGroup>
                        <HeaderSearch
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <HeaderProfile>
                            <HeaderPicture src='2' />
                            <HeaderDropdown>
                                <HeaderGroup>
                                    <HeaderPicture src='2' />
                                    <HeaderLink href='#'>
                                        {user.firstName}
                                    </HeaderLink>
                                </HeaderGroup>
                                <HeaderGroup>
                                    <HeaderLink
                                        href={appRoutes.HOME}
                                        onClick={() =>
                                            localStorageHelper.removeUserInfo()
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
            </>
        </Header>
    )
}

export default HeaderBrowse
