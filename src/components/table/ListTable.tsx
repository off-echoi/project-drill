import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

type TableDataType = {
  decorator?: ReactNode;
  title: string | ReactNode; //
  date: string;
  idx: string | number;
  linkTo?: string;
};
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
    vertical-align: middle;
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

export const ListTable = ({ tableData, columnTitle }: ListTableProps) => {
  return (
    <StyledListTable>
      <colgroup>
        {columnTitle.map(({ size }, idx) => (
          <col width={size} key={idx} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columnTitle.map(({ column }, idx) => (
            <th key={idx}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ title, date, idx, linkTo, decorator }) => (
          <tr key={idx}>
            <td>
              {decorator && decorator}
              <p className="list_title">{linkTo ? <Link to={linkTo}>{title}</Link> : <span>{title}</span>}</p>
            </td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </StyledListTable>
  );
};
