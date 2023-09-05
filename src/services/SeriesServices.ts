import { ResponseSeries, ResponseVideo } from 'src/types'

import { BaseServices } from './BaseServices'

class SeriesServices extends BaseServices {
    public async getPopularSeries(): Promise<ResponseSeries> {
        return this.getRequest({
            api: `tv/popular`
        })
    }

    public async getSeriesKey(seriesId: number): Promise<ResponseVideo> {
        return this.getRequest({
            api: `tv/${seriesId}/videos`
        })
    }
}

export const seriesServices: SeriesServices = new SeriesServices()
