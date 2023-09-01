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

type SelectProfileProps = {
    profile: Profile
    onSetProfile: Dispatch<SetStateAction<Profile>>
}

export function SelectProfile(props: SelectProfileProps) {
    const { profile, onSetProfile } = props

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
                <ProfilesList>
                    <ProfilesItem
                        onClick={() =>
                            onSetProfile({
                                displayName: profile.displayName,
                                photoURL: profile.photoURL
                            })
                        }
                        data-testid='user-profile'
                    >
                        <MainProfilesPicture src={profile.photoURL} />
                        <ProfilesName>{profile.displayName}</ProfilesName>
                    </ProfilesItem>
                </ProfilesList>
            </ProfilesContainer>
        </>
    )
}
