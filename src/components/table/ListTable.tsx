import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

type TableDataType = { title: string; date: string; idx: number; linkTo?: string };
type ColumnTitleType = { column: string; size: string };
interface ListTableProps {
  tableData: TableDataType[];
  columnTitle: ColumnTitleType[];
  className?: string;
}

const StyledListTable = styled.table`
  width: 100%;
  font-size: ${theme.typography.size.sm};
  border-top: 2px solid ${theme.color.gray7};
  border-bottom: 2px solid ${theme.color.gray7};
  thead {
    border-bottom: 1px solid ${theme.color.gray7};
  }
  tr + tr {
    border-top: 1px solid ${theme.color.gray8};
  }
  td,
  th {
    padding: ${theme.spacing.lg};
  }
  th {
    text-align: center;
    font-weight: ${theme.typography.weight.bold};
  }
  td {
    word-break: keep-all;
    line-height: 1.4;
  }

  .list_title {
    display: table;
    table-layout: fixed;
    width: 100%;
    white-space: nowrap;
    font-size: inherit;
  }
  .list_title a,
  .list_title span {
    overflow: hidden;
    display: table-cell;
    text-overflow: ellipsis;
    font-size: inherit;
  }
`;
export const ListTable = ({ tableData, columnTitle, className }: ListTableProps) => {
  return (
    <StyledListTable>
      <colgroup>
        {columnTitle.map(({ size }) => (
          <col width={size} />
        ))}
      </colgroup>
      <thead>
        {columnTitle.map(({ column }, idx) => (
          <th key={idx}>{column}</th>
        ))}
      </thead>
      <tbody>
        {tableData.map(({ title, date, idx, linkTo }) => (
          <tr key={idx}>
            <td>
              <p className="list_title">{linkTo ? <Link to={linkTo}>{title}</Link> : <span>{title}</span>}</p>
            </td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </StyledListTable>
  );
};
