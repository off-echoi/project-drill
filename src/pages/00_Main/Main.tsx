/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from 'constants/colors'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { popupControll } from 'reducers/popup'
import { ReactComponent as App } from 'assets/icon_app.svg'

function Main() {
  const dispatch = useDispatch()

  const fnLoginPop = useCallback(() => {
    dispatch(popupControll({ type: 'POPUP_LOGIN_STATE', payload: true }))
  }, [dispatch])
  return (
    <section css={style}>
      <article className="pos_middle">
        <App />
        <div className="area_text">
          <span>
            선생님과 학생 <br />
            1:1 관리 앱
          </span>
          <h1>
            D<span>R</span>
            IIL
          </h1>
        </div>
      </article>
      <article className="pos_bottom">
        <button className="btn_login" onClick={fnLoginPop}>
          로그인
        </button>
        <button className="btn_join">회원가입</button>
      </article>
    </section>
  )
}
const style = css`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 400rem;
  margin-bottom: -50rem;
  text-align: center;
  article {
    width: 100%;
  }
  .pos_middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .pos_bottom {
    position: absolute;
    bottom: 10rem;
  }
  svg {
    width: 100rem;
    height: auto;
    fill: ${COLORS.PrimaryBlue};
  }
  .area_text {
    margin: 20rem auto 60rem;
    > span {
      line-height: 1.3;
      font-size: 12rem;
    }
    h1 {
      font-size: 40rem;
      color: #444;
      span {
        color: ${COLORS.PrimaryBlue};
      }
    }
  }
  button {
    width: 90%;
    height: 39rem;
    margin-bottom: 10rem;
    line-height: 35rem;
    border-radius: 5rem;
    font-size: 14rem;
    color: #fff;
  }
  .btn_login {
    border: 2rem solid ${COLORS.PrimaryBlue};
    background: ${COLORS.PrimaryBlue};
  }
  .btn_join {
    border: 2rem solid ${COLORS.PrimaryBlue};
    color: ${COLORS.PrimaryBlue};
  }
`
export default Main
