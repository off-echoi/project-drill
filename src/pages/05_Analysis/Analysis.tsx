import { Header, LineChart, Main, CTABox, Typography } from 'components';
import { scoreChartData } from './mockupChartData';

function AnalysisPage() {
  return (
    <>
      <Header //
        headerTitle="성과 분석"
        // rightNavButtons={[
        //   <IconButton icon={<PencilIcon />} label="성과 등록" key={'addNotice'} onClick={() => goPage('/analysis/write', navigate)} />,
        // ]}
      />
      <Main>
        <CTABox content="김학생의 성과를 추적할 수 있습니다." />

        <Typography typotype="sub1" align="center">
          모의고사 - 영어
        </Typography>
        <LineChart height={'60dvh'} chartData={scoreChartData} />

        {/* <labe
            l htmlFor="searchParam" className="label">
                조회기간
              </labe>
              <select name="year" id="searchParam" className="select">
                <option value="2021">2021</option>
                <option value="2021">2020</option>
                <option value="2021">2019</option>
                <option value="2021">2018</option>
              </select> */}
      </Main>
    </>
  );
}

export default AnalysisPage;
