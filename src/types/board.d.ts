//* API 응답 데이터 형태

export type BaseBoardContentType = {
  idx: string | number; // idx
  title: string; // 제목
  content?: string; //
  createdAt: string | Date; // 등록일시
  userName?: string; // 등록자 이름
};

// qna 리스트
export type QnaContentType = BaseBoardContentType & {
  isAnswered: boolean; // 답변 완료 여부
  answer: string | null; // 답변
};
