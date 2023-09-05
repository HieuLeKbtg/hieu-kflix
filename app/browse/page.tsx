'use client'

import React, { useEffect, useState } from 'react'
import { Loading, ReleaseBody } from 'src/components'
import MainFooter from 'src/containers/footer'
import HeaderBrowse from 'src/containers/HeaderBrowse'
import { Profile } from 'src/types'

import { DEFAULT_PROFILE } from './constants'
import { SelectProfile } from './SelectProfile'

const BrowseContainer = () => {
    const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE)
    const [loading, setLoading] = useState<boolean>(true)
    const [search, setSearch] = useState<string>('')
    const [slideRows, setSlideRows] = useState([])

    // TODO: get user here

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    if (!profile.displayName) {
        return <SelectProfile onSetProfile={setProfile} />
    }

    return (
        <>
            {loading ? <Loading src={profile.photoURL} /> : <ReleaseBody />}

            <HeaderBrowse />

            {/* <SlideRows slideRows={[]} /> */}
            <MainFooter />
        </>
    )
}

export default BrowseContainer
