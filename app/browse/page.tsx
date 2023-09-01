'use client'

import React, { useEffect, useState } from 'react'
import { Loading, ReleaseBody } from 'src/components'
import MainFooter from 'src/containers/footer'
import { CategoryType } from 'src/types'
import { Profile } from 'src/types/users'

import { DEFAULT_PROFILE } from './constants'
import HeaderBrowse from './HeaderBrowse'
import { SelectProfile } from './SelectProfile'
import SlideRows from './SlideRows'

const BrowseContainer = () => {
    // TODO: slides is series and film data as initialisation here
    // const slides = selectionFilter({ series, films });
    const slides = []

    const [category, setCategory] = useState<CategoryType>('series')
    const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE)
    const [loading, setLoading] = useState<boolean>(true)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [slideRows, setSlideRows] = useState([])

    // TODO: get user here
    // const { firebase } = useContext(FirebaseContext)
    // const user = firebase.auth().currentUser || {}
    const user = { photoURL: '', displayName: 'Hieu Le' }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides?.[category] || [])
    }, [slides, category])

    useEffect(() => {
        // const fuse = new Fuse(slideRows, {
        //     keys: ['data.description', 'data.title', 'data.genre']
        // })
        // const results = fuse.search(searchTerm).map(({ item }) => item)
        // if (
        //     slideRows.length > 0 &&
        //     searchTerm.length > 3 &&
        //     results.length > 0
        // ) {
        //     setSlideRows(results)
        // } else {
        //     setSlideRows(slides?.[category])
        // }
    }, [searchTerm, slides, category, slideRows])

    if (!profile.displayName) {
        return <SelectProfile profile={user} onSetProfile={setProfile} />
    }

    return (
        <>
            {loading ? <Loading src={user.photoURL} /> : <ReleaseBody />}

            <HeaderBrowse category={category} onSetCategory={setCategory} />

            <SlideRows slideRows={[]} category={category} />
            <MainFooter />
        </>
    )
}

export default BrowseContainer
