import { Header, Avatar, Main, Typography, BoardTableV2, Divider } from 'components';
import ProfileImg from 'assets/profile01.jpg';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { getMyMembers } from './mockupUsers';
import { BaseUserType } from 'types/user';
import { useEffect, useState } from 'react';

function InfoPage() {
  const [memberList, getMemberList] = useState<BaseUserType[] | null>(null);

  const onSwitchMember = ({ idx, name }: Pick<BaseUserType, 'idx' | 'name'>) => {
    const switchConfirm = window.confirm(`${name} 회원으로 전환합니다.`);
    if (!switchConfirm) return;
  };
  const fetchAndSetMemberList = async () => {
    try {
      const data = await getMyMembers();
      getMemberList(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchAndSetMemberList();
  }, []);

  return (
    <>
      <Header //
        headerTitle="마이페이지"
      />

      <Main>
        <StyledGrid>
          <div className="info_items">
            <Typography typotype="sub2" align="center">
              내 정보
            </Typography>
            <Avatar name="최선생" />
            <BoardTableV2
              tabletheme="secondary"
              columnSize={['80px', 'auto']}
              tableData={[
                { title: '과목', content: '영어' },
                { title: '학력', content: '와플대학고 3학년 재학' },
                { title: '기타', content: '영어 영문학과 전공' },
              ]}
            />
          </div>
          <div className="info_items">
            <Typography typotype="sub2" align="center">
              현재 보고 있는 회원
            </Typography>
            <Avatar name="김회원" src={ProfileImg} />
            <BoardTableV2
              tabletheme="secondary"
              columnSize={['80px', 'auto']}
              tableData={[
                { title: '시간', content: '월, 수 17:00 ~ 19:00' },
                { title: '정보', content: '대와중학교 3학년' },
                { title: '기타', content: '내신에 중점을 두고 있음' },
              ]}
            />
          </div>
        </StyledGrid>
        <Divider $spacingY="large" />
        <StyledSection>
          <Typography typotype="sub2">다른 회원 관리하기</Typography>

          <StyledMemberList>
            {memberList &&
              memberList.length > 0 &&
              memberList.map(({ idx, src, name }) => (
                <button key={idx} onClick={() => onSwitchMember({ idx, name })}>
                  <Avatar name={name} src={src} />
                </button>
              ))}
          </StyledMemberList>
        </StyledSection>
      </Main>
    </>
  );
}

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .info_items {
    padding: ${theme.spacing.none} ${theme.spacing.xxl};
    h5 {
      margin-bottom: ${theme.spacing.xl};
    }
    &:first-of-type {
      border-right: 1px solid ${theme.color.gray8};
    }
  }
  @media (max-width: ${theme.bp.sm}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    .info_items {
      &:first-of-type {
        border-right: none;
        border-bottom: 1px solid ${theme.color.gray8};
      }
    }
  }
`;

const StyledSection = styled.section`
  padding: ${theme.spacing.lg} ${theme.spacing.none};
`;

const StyledMemberList = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: ${theme.spacing.xxl};
`;
export default InfoPage;
