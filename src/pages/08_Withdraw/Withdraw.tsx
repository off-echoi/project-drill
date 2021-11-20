/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo, useCallback, useState } from 'react'
import { Button, Typo } from '@components/index'
import Header from '@layouts/Header'

type WithdrawType = {
  code: 'code001' | 'code002' | 'code003'
  etc: string | undefined
}
function Withdraw() {
  // 탈퇴사유
  const [withdraw, setWithdraw] = useState<WithdrawType>({
    code: 'code001',
    etc: '',
  })
  const setWithdrawFn = useCallback((e) => {
    if (e.target.value === 'code001' || e.target.value === 'code002') {
      setWithdraw({
        code: e.target.value,
        etc: '',
      })
    } else {
      setWithdraw(
        (prev): WithdrawType => ({
          ...prev,
          [e.target.name]: e.target.value,
        })
      )
    }
  }, [])

  // 탈퇴사유 제출
  const submitWithdraw = useCallback(() => {
    alert(`탈퇴사유 제출 \n 코드 :${withdraw.code} \n ${withdraw.etc}`)
  }, [withdraw])

  return (
    <>
      <Header pageName="회원탈퇴"></Header>
      <section className="header_section" css={style}>
        <Typo type="pageNotice">탈퇴 이유를 선택해주세요.</Typo>
        <ul className="withdraw_wrap">
          <li className="withdraw_list">
            <input
              type="radio"
              id="code001"
              name="code"
              value="code001"
              className="radio"
              onChange={setWithdrawFn}
              checked={withdraw.code === 'code001' ? true : false}
            />
            <label htmlFor="code001">서비스 이용이 불편해서</label>
          </li>
          <li className="withdraw_list">
            <input
              type="radio"
              id="code002"
              name="code"
              value="code002"
              className="radio"
              onChange={setWithdrawFn}
              checked={withdraw.code === 'code002' ? true : false}
            />
            <label htmlFor="code002">다른 서비스를 이용하려고</label>
          </li>
          <li className="withdraw_list">
            <input
              type="radio"
              id="code003"
              name="code"
              value="code003"
              className="radio"
              onChange={setWithdrawFn}
              checked={withdraw.code === 'code003' ? true : false}
            />
            <label htmlFor="code003">기타</label>
          </li>
          <li className="withdraw_list">
            <textarea
              name="etc"
              id="code004"
              placeholder="내용을 입력해주세요."
              onChange={setWithdrawFn}
              disabled={withdraw.code !== 'code003' ? true : false}
              value={withdraw.etc}></textarea>
          </li>
        </ul>
        <Button type="full" onClick={submitWithdraw} addClassName="btn_fixed">
          제출하기
        </Button>
      </section>
    </>
  )
}

const style = css`
  .withdraw_wrap {
    margin: 10rem 30rem;
  }
  .withdraw_list {
    font-size: 14rem;
    padding: 10rem 0;
  }
  .radio {
    display: none;
    width: 0;
    height: 0;
  }
  label {
    display: block;
    position: relative;
    padding-left: 23rem;
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      height: 14rem;
      width: 14rem;
      margin-top: -7rem;
      border: 1rem solid #999;
      border-radius: 100%;
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 2rem;
      top: 50%;
      height: 12rem;
      width: 12rem;
      margin-top: -5rem;
      border-radius: 100%;
      background: #999;
    }
  }
  .radio:checked + label {
    &:after {
      border: 1rem solid ${COLORS.PrimaryBlue};
    }
    &:before {
      background: ${COLORS.PrimaryBlue};
    }
  }
  textarea {
    width: 100%;
    height: 140rem;
    font-size: 14rem;
    &:disabled {
      opacity: 0.7;
    }
  }
  .btn_fixed {
    position: fixed;
    z-index: 20;
    bottom: 0rem;
  }
`
export default memo(Withdraw)
