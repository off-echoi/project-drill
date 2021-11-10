type argType = {
  type: 'NAV_STATE' | 'POPUP_LOGIN_STATE' | 'POPUP_JOIN_STATE'
  payload: boolean
}
type initialType = {
  [key: string]: boolean
}
// const POP_LOG_IN = 'popup/POP_LOG_IN' as const // 로그인 팝업
// const POP_SIGN_UP = 'popup/POP_SIGN_UP' as const // 회원가입 팝업
// const POP_NAV = 'popup/POP_NAV' as const // 햄버거 네비게이션 팝업

export const initialState: initialType = {
  NAV_STATE: false, // 사이드 햄버거 메뉴
  POPUP_LOGIN_STATE: false, // 로그인
  POPUP_JOIN_STATE: false, // 회원가입
}
export const popupControll = ({ type, payload }: argType) => {
  return {
    type, // 'NAV_STATE', ...
    payload, // 'boolean'
  }
}

function popup(state: initialType = initialState, action: argType): initialType {
  return {
    ...state,
    [action.type]: action.payload,
  }
}

export default popup
