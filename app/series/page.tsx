import MainFooter from 'src/containers/footer'
import HeaderBrowse from 'src/containers/HeaderBrowse'

const Series = async () => {
    // const responseFilmsResult: ResponseFilms =
    //     await filmServices.getPopularFilms()

    // const filmList = responseFilmsResult.results

    return (
        <>
            <HeaderBrowse />
            {/* {filmList.map((item, index) => {
                return <div key={index}>{item.id}</div>
            })} */}
            This is series page
            <MainFooter />
        </>
    )
}

export default Series
