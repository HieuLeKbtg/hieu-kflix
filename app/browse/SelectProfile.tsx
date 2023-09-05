import { appRoutes } from 'app/routes'
import React, { Dispatch, SetStateAction } from 'react'
import { Profile } from 'src/types'

import {
    Header,
    HeaderFrame,
    HeaderLogo,
    MainProfilesPicture,
    ProfilesContainer,
    ProfilesItem,
    ProfilesList,
    ProfilesName,
    ProfilesTitle
} from '../../src/components'
import { DEFAULT_PROFILE_LIST } from './constants'

type SelectProfileProps = {
    onSetProfile: Dispatch<SetStateAction<Profile>>
}

export function SelectProfile(props: SelectProfileProps) {
    const { onSetProfile } = props

    return (
        <>
            <Header bg={false}>
                <HeaderFrame>
                    <HeaderLogo
                        to={appRoutes.HOME}
                        src='/images/icons/logo.svg'
                        alt='Netflix'
                    />
                </HeaderFrame>
            </Header>

            <ProfilesContainer>
                <ProfilesTitle>Who's watching?</ProfilesTitle>
                <div style={{ display: 'flex', gap: '15px' }}>
                    {DEFAULT_PROFILE_LIST.map((profile, index) => {
                        return (
                            <ProfilesList key={index}>
                                <ProfilesItem
                                    onClick={() => onSetProfile(profile)}
                                    data-testid='user-profile'
                                >
                                    <MainProfilesPicture
                                        src={profile.photoURL}
                                    />
                                    <ProfilesName>
                                        {profile.displayName}
                                    </ProfilesName>
                                </ProfilesItem>
                            </ProfilesList>
                        )
                    })}
                </div>
            </ProfilesContainer>
        </>
    )
}
