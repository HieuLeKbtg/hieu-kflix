import MainFooter from 'src/containers/footer'
import SlideRows from 'src/containers/SlideRows'
import { configServices, filmServices, genreServices } from 'src/services'
import { FilmStates, ResponseConfiguration, ResponseGenres } from 'src/types'

import AuthHeader from '@/containers/header/authHeader'

type FilmsProps = {
    searchParams: Record<PropertyKey, string>
}

const Films = async (props: FilmsProps) => {
    const { searchParams } = props
    const genreResult: ResponseGenres = await genreServices.getGenreMoveList()
    const filmList: FilmStates[] = await filmServices.getPopularFilms(
        genreResult.genres
    )

    const searchedFilmList: FilmStates[] = await filmServices.searchFilms(
        searchParams?.search ?? '',
        genreResult.genres
    )

    const configResult: ResponseConfiguration = await configServices.getDetail()

    return (
        <>
            <AuthHeader />

            <SlideRows
                category='films'
                imageConfigs={configResult.images}
                data={searchedFilmList.length ? searchedFilmList : filmList}
            />

            <MainFooter />
        </>
    )
}

export default Films
