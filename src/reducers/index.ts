import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import popup from './popup'

const rootReducer = combineReducers({
  counter,
  popup,
  user,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
