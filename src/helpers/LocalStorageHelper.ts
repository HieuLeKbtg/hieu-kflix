'use client'

import { User } from 'src/types'

const USER_INFO = 'userInfo'
const USER_LIST = 'userList'

class LocalStorageHelper {
    private _setItem(key: string, value: string): void {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(key, value)
        }
    }

    private _getItem(key: string): string | null {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem(key)
        }
        return null
    }

    private _removeItem(key: string): void {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.removeItem(key)
        }
        return null
    }

    setUserInfo(user: User) {
        this._setItem(USER_INFO, JSON.stringify(user))
    }

    getUserInfo(): User | null {
        return JSON.parse(this._getItem(USER_INFO))
    }

    setUserList(userList: User[]) {
        this._setItem(USER_LIST, JSON.stringify(userList))
    }

    getUserList(): User[] | null {
        return JSON.parse(this._getItem(USER_LIST))
    }

    removeUserInfo(): void {
        this._removeItem(USER_INFO)
    }
}

export const localStorageHelper = new LocalStorageHelper()
