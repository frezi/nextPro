import { createStore } from 'redux'
import reducer, { IStoreState } from './reducer'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'

export const store = createStore(reducer)

const makeStore: MakeStore<IStoreState> = (context: Context) =>
	createStore(reducer)
export const wrapper = createWrapper<IStoreState>(makeStore)
