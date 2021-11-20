/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@/constants/colors'
import { Button, Input } from '@components/index'
import { memo, useCallback } from 'react'
import Header from '@layouts/Header'
import { ReactComponent as Plus } from '@assets/icon_add.svg'
import { ReactComponent as Update } from '@assets/icon_write.svg'
import { ReactComponent as Delete } from '@assets/icon_delete.svg'

function AnalysisWrite() {
  const fnAddList = useCallback(() => {
    alert('데이터 추가')
  }, [])
  const fnDelete = useCallback(() => {
    alert('삭제되었습니다.')
  }, [])
  const fnUpdate = useCallback(() => {
    console.log('수정')
  }, [])

  const submitRate = useCallback(() => {
    alert('등록되었습니다.')
  }, [])
  return (
    <>
      <Header pageName="성과 분석 데이터 등록" type="back" />
      <section className="header_section fixed_btn_section" css={style}>
        <Button type="icon" onClick={fnAddList} addClassName="btn_plus">
          <Plus />
          <span className="hidden">데이터 추가</span>
        </Button>
        <ul className="data_list_wrap">
          <li className="data_list rate_write">
            <Input labelText="날짜" type="text" name="add_date" value="2021년 10월" id="add_date" addClassName="add_data_date" />
            <Input labelText="성적" type="text" name="add_rate" value="100" id="add_rate" addClassName="add_data_rate" />
          </li>
          <li className="data_list">
            <span className="data_date">2021년 9월</span>
            <div className="data_wrap">
              <span className="data_rate">90점</span>
              <Button type="icon" onClick={fnUpdate} addClassName="btn_update">
                <Update />
                <span className="hidden">데이터 수정</span>
              </Button>
              <Button type="icon" onClick={fnDelete} addClassName="btn_delete">
                <Delete />
                <span className="hidden">데이터 삭제</span>
              </Button>
            </div>
          </li>
          <li className="data_list">
            <span className="data_date">2021년 8월</span>
            <div className="data_wrap">
              <span className="data_rate">82점</span>
              <Button type="icon" onClick={fnUpdate} addClassName="btn_update">
                <Update />
                <span className="hidden">데이터 수정</span>
              </Button>
              <Button type="icon" onClick={fnDelete} addClassName="btn_delete">
                <Delete />
                <span className="hidden">데이터 삭제</span>
              </Button>
            </div>
          </li>
          <li className="data_list">
            <span className="data_date">2021년 7월</span>
            <div className="data_wrap">
              <span className="data_rate">81점</span>
              <Button type="icon" onClick={fnUpdate} addClassName="btn_update">
                <Update />
                <span className="hidden">데이터 수정</span>
              </Button>
              <Button type="icon" onClick={fnDelete} addClassName="btn_delete">
                <Delete />
                <span className="hidden">데이터 삭제</span>
              </Button>
            </div>
          </li>
        </ul>

        <Button type="fullFix" onClick={submitRate}>
          등록하기
        </Button>
      </section>
    </>
  )
}

const style = css`
  .btn_plus {
    display: block;
    margin: 10rem auto;
  }
  .add_data_date,
  .add_data_rate {
    width: auto;
    label {
      min-width: auto;
      padding-right: 10rem;
    }
    input {
      width: 90rem;
    }
  }
  .add_data_rate {
    text-align: right;
  }
  .data_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15rem 15rem;
    font-size: 14rem;
    border-top: 1rem solid ${COLORS.LightGray};
    &:last-child {
      border-bottom: 1rem solid ${COLORS.LightGray};
    }
  }
  .data_rate {
    margin-right: 10rem;
  }
  .data_wrap {
    display: flex;
    align-items: center;
    button {
      width: 25rem;
      height: 15rem;
    }
    svg {
      width: 15rem;
      height: 15rem;
      fill: #aaa;
    }
  }
`
export default memo(AnalysisWrite)
