import { Avatar, BoardList, Typo, InfoTable, Button, Input, BoardTable } from 'components/index'
import ProfileImage from 'assets/profile01.jpg'
import { ReactComponent as Menu } from 'assets/icon_menu.svg'
type ContentType = {
  subject: string
  createdAt: string
  id: string | number
  path: string
  userName: string
  answerYN?: boolean // 질문, 답변 게시판용
}

const contentList1: ContentType[] = [
  {
    subject: '게시판 제목 게시판 제목 게시판 제목 게시판 제목',
    createdAt: '2021-03-01',
    userName: '작서자 명',
    path: '#',
    answerYN: false,
    id: 1,
  },
  {
    subject: '게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2 게시판 제목2',
    createdAt: '2021-03-01',
    userName: '작성자2 작성자2',
    path: '#',
    answerYN: true,
    id: 12,
  },
]
const contentList2: ContentType[] = [
  {
    subject: 'string1',
    createdAt: 'string1',
    userName: 'string1',
    path: '#',
    answerYN: true,
    id: 5,
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
      <h3>인풋</h3>
      <Input labelText="제목" id="title" type="text" name="title" value="value" onChange={() => console.log('>')} />
      <hr />
      <h3>텍스트</h3>
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
      <h4>게시판 읽기 테이블</h4>
      <BoardTable>
        <tr>
          <th>제목</th>
          <td>제목입니다.</td>
        </tr>
      </BoardTable>
    </div>
  )
}

export default Common
