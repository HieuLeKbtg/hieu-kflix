'use client'

import React, { useEffect, useState } from 'react'
import { Profile } from 'src'

import MainFooter from '@/containers/footer'
import HeaderBrowse from '@/containers/HeaderBrowse'

import { DEFAULT_PROFILE } from './constants'

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

    // if (!profile.displayName) {
    //     return <SelectProfile onSetProfile={setProfile} />
    // }

    return (
        <>
            {/* {loading ? <Loading src={profile.photoURL} /> : <ReleaseBody />} */}

            <HeaderBrowse />

            {/* <SlideRows slideRows={[]} /> */}
            <MainFooter />
        </>
    )
}

export default BrowseContainer
