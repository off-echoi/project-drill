const LOG_IN = 'user/LOG_IN' as const // 로그인 액션
const LOG_OUT = 'user/LOG_OUT' as const // 로그아웃 액션
const USER_INFO = 'user/USER_INFO' as const // 회원정보

export const logInAction = () => ({ type: LOG_IN })
export const logOutAction = () => ({ type: LOG_OUT })
export const saveUserInfo = (user: userType) => ({
  type: USER_INFO,
  payload: user,
})

type userType = {
  userId: string
  userName: string
}

type initialType = {
  isLogged: boolean
  user?: userType
}

const initialState: initialType = {
  isLogged: false,
  user: {
    userId: '',
    userName: '',
  },
}

type UserAction = ReturnType<typeof logInAction> | ReturnType<typeof logOutAction> | ReturnType<typeof saveUserInfo>

function user(state: initialType = initialState, action: UserAction): initialType {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      }
    case LOG_OUT:
      return {
        isLogged: false,
      }
    case USER_INFO:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default user
