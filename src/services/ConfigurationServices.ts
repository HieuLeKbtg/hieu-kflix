import 'server-only'

import { ResponseConfiguration } from 'src/types/configs'

import { BaseServices } from './BaseServices'

class ConfigurationServices extends BaseServices {
    public async getDetail(): Promise<ResponseConfiguration> {
        return this.getRequest({
            api: `configuration`
        })
    }
}

export const configServices: ConfigurationServices = new ConfigurationServices()
