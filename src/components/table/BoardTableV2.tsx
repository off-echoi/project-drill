import { ThemeType } from 'components/varient';
import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { replaceNewLineToBr } from 'utils/stringUtils';

type TableDataType = {
  title: string | ReactNode;
  content: string | ReactNode;
};

type tablethemeType = Exclude<ThemeType, 'accent'>;

interface BoradTableProps {
  tableData: TableDataType[];
  columnSize?: [string, string];
  tabletheme?: tablethemeType;
  className?: string;
}

const StyledBoardTable = styled.table<Pick<BoradTableProps, 'tabletheme'>>`
  width: 100%;
  font-size: ${theme.typography.size.sm};
  tr + tr {
    border-top: ${({ tabletheme }) => {
      const tablethemeStyle: Record<tablethemeType, string> = {
        primary: theme.color.gray7,
        secondary: theme.color.gray8,
        tertiary: 'transperant',
      };
      return `1px solid ${tablethemeStyle[tabletheme as tablethemeType]};`;
    }};
  }
  td,
  th {
    padding: ${theme.spacing.lg};
  }
  th {
    vertical-align: middle;
    text-align: left;
    font-weight: ${theme.typography.weight.bold};
  }
  td {
    word-break: keep-all;
    line-height: 1.4;
  }
`;

export const BoardTableV2 = ({ tableData, columnSize = ['20%', 'auto'], tabletheme = 'primary', className = '' }: BoradTableProps) => {
  return (
    <StyledBoardTable className={className} tabletheme={tabletheme}>
      <colgroup>
        {columnSize?.length > 0 ? (
          <>
            {columnSize.map((size, idx) => (
              <col width={size} key={idx} />
            ))}
          </>
        ) : (
          <>
            <col width={'20%'} />
            <col />
          </>
        )}
      </colgroup>
      <tbody>
        {tableData.map(({ title, content }, idx) => (
          <tr key={idx}>
            <th>{title}</th>
            <td>{typeof content === 'string' ? replaceNewLineToBr(content) : content}</td>
          </tr>
        ))}
      </tbody>
    </StyledBoardTable>
  );
};
