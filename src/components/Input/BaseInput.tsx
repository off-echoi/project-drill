/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { InputHTMLAttributes, memo } from 'react';

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Input({ type, name, id, value, onChange, className, ...props }: InputType) {
  return (
    <div css={style} className={className}>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} name={name} id={id} value={value} onChange={onChange} {...props} />
    </div>
  );
}

const style = css`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14rem;
  label {
    display: inline-block;
    min-width: 80rem;
  }
  input {
    padding: 3rem;
    border: 1rem solid #888888;
    font-size: 14rem;
    width: calc(100% - 80rem);
    &:read-only {
      border: none;
      pointer-events: none;
    }
  }
`;
export default memo(Input);
