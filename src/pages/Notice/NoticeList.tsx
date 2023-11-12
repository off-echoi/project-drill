import { Header, BoardList, IconButton, PencilIcon, Main, CTABox, Accordion, AccordionItem, AccordionContent, Badge, NoContent } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goPage } from 'modules';
import { BaseBoardContentType } from 'types/board';
import { getNotice } from './noticeMockupData';
import { replaceNewLineToBr } from 'utils/stringUtils';
import { NoticeTitle } from './component/NoticeTitle';

function NoticeList() {
  const [noticeList, setNoticeList] = useState<BaseBoardContentType[] | null>(null);
  const navigate = useNavigate();

  const fetchAndSetNoticeList = async () => {
    try {
      const data = await getNotice();
      setNoticeList(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAndSetNoticeList();
  }, []);

  return (
    <>
      <Header //
        headerTitle="공지사항"
        rightNavButtons={[<IconButton icon={<PencilIcon />} label="공지 등록" key={'addNotice'} onClick={() => goPage('/notice/write', navigate)} />]}
      />
      <Main>
        <CTABox content="수업 변동사항 등 공지를 알려주세요." />

        {noticeList && noticeList.length > 0 ? (
          <Accordion initialExpandedItems={['notice4']}>
            {noticeList.map(({ title, content, createdAt, idx }) => (
              <AccordionItem accordionId={`notice${idx}`} title={<NoticeTitle title={title} createdAt={createdAt} />}>
                <AccordionContent>{replaceNewLineToBr(content as string)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <NoContent content="등록 된 공지사항이 없습니다." />
        )}
      </Main>
    </>
  );
}
export default NoticeList;
