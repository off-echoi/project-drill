import React from 'react'

import BoardList from './BoardList'

export default {
  component: BoardList,
  title: 'BoardList',
}

export const Default = () => {
  return <BoardList title="제목입니다." date="2021.01.20" userName="작성자자" answerYN="true" href="/" />
}
