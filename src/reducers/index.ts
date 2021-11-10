import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

const rootReducer = combineReducers({
  counter,
  user,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
