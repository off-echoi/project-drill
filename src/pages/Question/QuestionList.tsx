import { useEffect, useState } from 'react';
import { Badge, CTABox, Header, ListTable, Main, NoContent } from 'components';
import { formattingDate } from 'utils/dateUtils';
import { getQnaList } from './qnaMockupData';
import { QnaContentType } from 'types/board';

function QuestionListPage() {
  const [qnaList, setQnaList] = useState<QnaContentType[] | null>(null);

  const fetchAndSetQnaList = async () => {
    try {
      // const data = getQnaDetail(Number(qnaId));
      const data = await getQnaList();
      setQnaList(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAndSetQnaList();
  }, []);
  return (
    <>
      <Header //
        headerTitle="질문 & 답변"
      />
      <Main>
        <CTABox content="질문을 확인하고 답변해주세요." />
        {qnaList?.length && qnaList?.length > 0 ? (
          <ListTable
            tableData={qnaList.map(({ title, createdAt, userName, isAnswered, idx }) => ({
              decorator: <>{isAnswered && <Badge>답변필요</Badge>}</>,
              title: title,
              date: formattingDate(createdAt),
              linkTo: `/qna/${idx}`,
              idx: idx,
            }))}
            columnTitle={[
              { column: '질문', size: 'auto' },
              { column: '등록 날짜', size: '120px' },
            ]}
          />
        ) : (
          <NoContent content="아직 작성된 질문이 없습니다." />
        )}
      </Main>
    </>
  );
}
export default QuestionListPage;
