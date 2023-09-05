import MainFooter from 'src/containers/footer'
import HeaderBrowse from 'src/containers/HeaderBrowse'
import SlideRows from 'src/containers/SlideRows'
import { configServices, filmServices, genreServices } from 'src/services'
import { ResponseConfiguration, ResponseFilms, ResponseGenres } from 'src/types'

const Films = async () => {
    const responseFilmsResult: ResponseFilms =
        await filmServices.getPopularFilms()
    const genreResult: ResponseGenres = await genreServices.getGenreMoveList()

    const configResult: ResponseConfiguration = await configServices.getDetail()

    const filmList = responseFilmsResult?.results?.map((film) => {
        return {
            id: film.id,
            title: film.title,
            description: film.overview,
            backdrop_path: film.backdrop_path,
            poster_path: film.poster_path,
            genres: genreResult.genres.filter((item) =>
                film.genre_ids.includes(item.id)
            )
        }
    })

    return (
        <>
            <HeaderBrowse />

            <SlideRows
                category='films'
                imageConfigs={configResult.images}
                data={filmList}
            />

            <MainFooter />
        </>
    )
}

export default Films
