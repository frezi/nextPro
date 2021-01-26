import { AnyAction } from 'redux'
import { GETUSERINFO, CHANGEUSERINFO } from './reducer'

type ACTION_CREATOR<T = any> = (payload?: T) => AnyAction

export const getUserInfo: ACTION_CREATOR = (payload) => ({
	type: GETUSERINFO,
	payload,
})

export const changeUserInfo = (subName, payload) => ({
	type: CHANGEUSERINFO,
	subName,
	payload,
})
