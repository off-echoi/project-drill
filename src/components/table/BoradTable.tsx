import { ThemeType } from 'components/varient';
import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { replaceNewLineToBr } from 'utils/stringUtils';

type TableDataType = {
  title: string | ReactNode;
  content: string | ReactNode;
};

type TableThemeType = Exclude<ThemeType, 'accent'>;

interface BoradTableProps {
  tableData: TableDataType[];
  columnSize?: [string, string];
  tableTheme?: TableThemeType;
  className?: string;
}

const StyledBoardTable = styled.table<Pick<BoradTableProps, 'tableTheme'>>`
  width: 100%;
  font-size: ${theme.typography.size.sm};
  tr + tr {
    border-top: ${({ tableTheme }) => {
      const tableThemeStyle: Record<TableThemeType, string> = {
        primary: theme.color.gray7,
        secondary: theme.color.gray8,
        tertiary: 'transperant',
      };
      return `1px solid ${tableThemeStyle[tableTheme as TableThemeType]};`;
    }};
  }
  td,
  th {
    padding: ${theme.spacing.lg};
  }
  th {
    text-align: left;
    font-weight: ${theme.typography.weight.bold};
  }
  td {
    word-break: keep-all;
    line-height: 1.4;
  }
`;

export const BoradTableV2 = ({ tableData, columnSize = ['20%', 'auto'], tableTheme = 'primary', className = '' }: BoradTableProps) => {
  return (
    <StyledBoardTable className={className} tableTheme={tableTheme}>
      <colgroup>
        {columnSize?.length > 0 ? (
          <>
            {columnSize.map(size => (
              <col width={size} />
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
