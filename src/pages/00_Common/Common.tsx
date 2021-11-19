import { Avatar, BoardList, Typo, InfoTable, Button } from '@components/index'
import ProfileImage from '@assets/profile01.jpg'
import { ReactComponent as Menu } from '@assets/icon_menu.svg'
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
    answerYN: true,
  },
  {
    title: '게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2',
    date: '2021-03-01',
    userName: '작성자2 작성자2',
    href: '#',
    answerYN: true,
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
      <h3>버튼</h3>
      <Button type="full" onClick={() => console.log('클릭')}>
        기본 버튼
      </Button>
      <Button type="icon" onClick={() => console.log('클릭')}>
        <Menu />
        <span className="hidden">아이콘 버튼</span>
      </Button>
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
      <hr />
      <h4>회원 정보 테이블</h4>
      <InfoTable>
        <tr>
          <th>시간 </th>
          <td>월, 수 17:00 ~ 19:00</td>
        </tr>
        <tr>
          <th>과목 </th>
          <td>영어</td>
        </tr>
        <tr>
          <th>정보 </th>
          <td>대와중학교 3학년</td>
        </tr>
        <tr>
          <th>기타</th>
          <td>기타 메모사항</td>
        </tr>
      </InfoTable>
    </div>
  )
}

export default Common
