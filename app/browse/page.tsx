import React from 'react'

import MainFooter from '@/containers/footer'
import AuthHeader from '@/containers/header/authHeader'

const BrowseContainer = () => {
    // TODO: add loading later

    // const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE)
    // const [loading, setLoading] = useState<boolean>(true)
    // const [search, setSearch] = useState<string>('')
    // const [slideRows, setSlideRows] = useState([])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    // }, [])

    // if (!profile.displayName) {
    //     return <SelectProfile onSetProfile={setProfile} />
    // }

    return (
        <>
            {/* {loading ? <Loading src={profile.photoURL} /> : <ReleaseBody />} */}

            <AuthHeader />

            {/* <SlideRows slideRows={[]} /> */}
            <MainFooter />
        </>
    )
}

export default BrowseContainer
