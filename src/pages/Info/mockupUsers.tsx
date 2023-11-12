import { BaseUserType } from 'types/user';

export const userData: BaseUserType[] = [
  {
    idx: 1,
    name: '김회원',
    src: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    idx: 2,
    name: '강학생',
    src: '',
  },
  {
    idx: 3,
    name: '유멤버',
    src: 'https://plus.unsplash.com/premium_photo-1664099905313-f391570783fe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    idx: 5,
    name: '고학생',
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// 나의 회원 리스트 불러오기
export const getMyMembers = () => {
  return new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
      return userData;
    })
    .catch(() => {
      return null;
    });
};
