import { BoardTableV2, Main, Header, TextArea, ButtonV2 } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQnaDetail } from './qnaMockupData';
import { QnaContentType } from 'types/board';
import { formattingDate } from 'utils/dateUtils';
import { replaceNewLineToBr } from 'utils/stringUtils';

function QuestionDetailPage() {
  const { qnaId } = useParams();
  const [qnaContent, setQnaContent] = useState<QnaContentType | null>(null);
  const [answer, setAnswer] = useState<string>('');

  const fetchAndSetQnaContent = async () => {
    try {
      // const data = getQnaDetail(Number(qnaId));
      const data = await getQnaDetail(Number(qnaId));
      setQnaContent(data);
    } catch (error) {}
  };

  const onChangeAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const onSubmitAnswer = () => {
    console.log(answer);
    alert('답변을 등록했습니다.');
  };

  const onUpdateAnswer = () => {
    console.log('TODO: 준비중입니다.');
  };

  useEffect(() => {
    fetchAndSetQnaContent();
  }, []);
  return (
    <>
      <Header //
        leftNavType="back"
        headerTitle="질문 & 답변"
      />
      <Main>
        <BoardTableV2
          tableData={[
            { title: '제목', content: qnaContent?.title },
            {
              title: '작성자',
              content: qnaContent?.userName,
            },
            { title: '날짜', content: formattingDate(qnaContent?.createdAt) },
            {
              title: '내용',
              content: qnaContent?.content,
            },
            {
              title: '답변',
              content: (
                <>
                  {!qnaContent?.isAnswered ? (
                    <TextArea name="answer" id="answer" placeholder="답변을 작성해주세요." value={answer} onChange={onChangeAnswer} />
                  ) : (
                    qnaContent?.answer && replaceNewLineToBr(qnaContent?.answer)
                  )}
                </>
              ),
            },
          ]}
        />

        {!qnaContent?.isAnswered && (
          <ButtonV2 type="fullFix" onClick={onSubmitAnswer}>
            답변등록
          </ButtonV2>
        )}
        {qnaContent?.isAnswered && (
          <ButtonV2 colortheme="secondary" onClick={onUpdateAnswer}>
            답변 수정
          </ButtonV2>
        )}
      </Main>
    </>
  );
}

export default QuestionDetailPage;
