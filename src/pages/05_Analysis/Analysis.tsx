/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Typo } from 'components/index'
import LineChart from './LineChart'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { goPage } from 'modules'
import Header from 'layouts/Header'
import { ReactComponent as Write } from 'assets/icon_write.svg'

function Analysis() {
  const navigate = useNavigate()

  const goToPage = useCallback(
    (url: string) => {
      goPage(url, navigate)
    },
    [navigate]
  )

  return (
    <>
      <Header pageName="성과 분석">
        <Button type="icon" onClick={() => goToPage('/analysis/write')} addClassName="btn_gray">
          <Write />
          <span className="hidden">성과 등록</span>
        </Button>
      </Header>
      <section className="header_section" css={style}>
        <Typo type="pageNotice">관리 회원의 변화를 추적할 수 있습니다.</Typo>
        <article className="chart_area">
          <div className="area_top">
            <h3>영어</h3>
            <div>
              <label htmlFor="searchParam" className="label">
                조회기간
              </label>
              <select name="year" id="searchParam" className="select">
                <option value="2021">2021</option>
                <option value="2021">2020</option>
                <option value="2021">2019</option>
                <option value="2021">2018</option>
              </select>
            </div>
          </div>
          <LineChart />
        </article>
      </section>
    </>
  )
}

const style = css`
  padding-left: 20rem;
  padding-right: 20rem;
  .chart_area {
    padding-bottom: 10rem;
  }
  .area_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10rem 0 20rem;
  }
  .area_top h3 {
    font-size: 20rem;
    font-weight: bold;
    text-align: left;
  }
  .label {
    padding-right: 10rem;
    font-size: 14rem;
  }
  .select {
    width: 60rem;
    height: 25rem;
    font-size: 14rem;
  }
`
export default Analysis
