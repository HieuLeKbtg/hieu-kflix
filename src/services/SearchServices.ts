import { ResponseSearch } from '../types'
import { BaseServices } from './BaseServices'

class SearchServices extends BaseServices {
    public async searchMulti(keywords: string): Promise<ResponseSearch> {
        return this.getRequest({
            api: `search/movie?query=${keywords}`
        })
    }
}

export const searchServices: SearchServices = new SearchServices()
