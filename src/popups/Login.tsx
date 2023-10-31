/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { popupControll } from '@reducers/popup'
import { goPage } from '@/modules'
import { Input, Typo } from '@components/index'
import ModalWrap from '@layouts/ModalWrap'
import { ReactComponent as App } from '@assets/icon_app.svg'

type LoginInfo = {
  userId: string
  password: string
}
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({ userId: '', password: '' })
  const [validation, setValidation] = useState<boolean>(true) // true 면 유효성 통과
  //로그인 상태값 입력
  const _setLoginInfo = useCallback(e => {
    const {
      target: { name, value },
    } = e
    setLoginInfo((prev: LoginInfo) => ({
      ...prev,
      [name]: value,
    }))
  }, [])
  // 팝업닫기
  const fnClose = useCallback(() => {
    dispatch(popupControll({ type: 'POPUP_LOGIN_STATE', payload: false }))
  }, [dispatch])

  // 메인으로 이동
  const submitLogin = useCallback(
    (url: string) => {
      if (loginInfo.userId !== '' && loginInfo.password !== '') {
        setValidation(true)
        dispatch(popupControll({ type: 'POPUP_LOGIN_STATE', payload: false }))
        goPage(url, navigate)
      } else {
        setValidation(false)
      }
    },
    [dispatch, navigate, loginInfo.password, loginInfo.userId]
  )

  return (
    <ModalWrap onClose={fnClose}>
      <section css={style}>
        <App />
        <p className="app_name">
          D<span>R</span>ILL
        </p>
        <div className="area_input">
          <Input
            type="text"
            labelText="E-mail"
            name="userId"
            id="useId"
            value={loginInfo.userId}
            onChange={_setLoginInfo}
            addClassName="user_input"
            required
          />
          <Input
            type="password"
            labelText="Password"
            name="password"
            id="password"
            value={loginInfo.password}
            onChange={_setLoginInfo}
            addClassName="user_input"
            required
          />
        </div>
        {!validation ? <Typo type="text">이메일 및 비밀번호를 확인해주세요.</Typo> : <></>}
        <div className="pos_bottom">
          <button className="btn_login" onClick={() => submitLogin('/members')}>
            Login
          </button>
        </div>
      </section>
    </ModalWrap>
  )
}

const style = css`
  position: relative;
  min-height: 350rem;
  height: calc(100vh - 50rem);
  svg {
    display: block;
    width: 100rem;
    height: auto;
    margin: 0 auto;
    fill: ${COLORS.PrimaryBlue};
  }
  .app_name {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 30rem;
    text-align: center;
    color: #444;
    span {
      color: ${COLORS.PrimaryBlue};
    }
  }
  .area_input {
    font-size: 14rem;
    margin: 45rem 20rem;
  }
  .user_input + .user_input {
    margin-top: 10rem;
  }
  .pos_bottom {
    position: absolute;
    bottom: 10rem;
    width: 100%;
    padding: 0 10rem;
  }
  .btn_login {
    width: 100%;
    height: 39rem;
    margin-bottom: 10rem;
    line-height: 35rem;
    border-radius: 5rem;
    border: 2rem solid ${COLORS.PrimaryBlue};
    font-size: 14rem;
    color: #fff;
    background: ${COLORS.PrimaryBlue};
  }
`
export default Login
