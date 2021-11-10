import { Avatar, BoardList, Typo } from '@components/index'
import ProfileImage from '@assets/profile01.jpg'
type ContentType = {
  title: string
  date: string
  userName: string
  href: string // TODO: 오브젝트 형태로바꾸끼
  answerYN?: boolean // 질문, 답변 게시판용
}

const contentList1: ContentType[] = [
  {
    title: '게시판 제목 게시판 제목 게시판 제목 게시판 제목',
    date: '2021-03-01',
    userName: '작서자 명',
    href: '#',
    answerYN: false,
  },
]
const contentList2: ContentType[] = [
  {
    title: 'string1',
    date: 'string1',
    userName: 'string1',
    href: '#',
    answerYN: true,
  },
]
function Common() {
  return (
    <div>
      <h3>프로필</h3>
      <Avatar name="회원1" date="월, 목 13:00">
        <img src={ProfileImage} alt="이미지" />
      </Avatar>

      <Avatar name="회원1" date="월, 목 13:00" type="list">
        <img src={ProfileImage} alt="이미지" />
      </Avatar>
      <hr />
      <Typo type="title">제목 1</Typo>
      <Typo type="subTitle">제목 2</Typo>
      <Typo type="text">글자 문단</Typo>
      <hr />
      <h3>게시판</h3>
      <h4>기본 게시판</h4>
      <BoardList content={contentList1} />
      <h4>질문답변 게시판</h4>
      <BoardList content={contentList2} />
    </div>
  )
}

export default Common
