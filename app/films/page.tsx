import { filmServices } from 'src/services/FilmServices'
import { ResponseFilms } from 'src/types/films'

const Films = async () => {
    const responseFilmsResult: ResponseFilms =
        await filmServices.getPopularFilms()

    const filmList = responseFilmsResult.results
    console.log('filmList', filmList)
    return (
        <>
            {filmList.map((item, index) => {
                return <div key={index}>{item.id}</div>
            })}
        </>
    )
}

export default Films
