import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

type MergeButtonType<BaseType, ElementType> = BaseType & ElementType;

// 버튼 props
type AsButtonProps<T> = MergeButtonType<T, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof T> & { as?: 'Button' }>;

// Link Props
type AsLinkProps<T> = MergeButtonType<T, Omit<LinkProps, keyof T> & { as?: 'Link' }>;

// 기본 a props
type AsOutLinkProps<T> = MergeButtonType<T, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof T> & { as?: 'a' }>;

export type UnionButtonProps<T> = AsButtonProps<T> | AsLinkProps<T> | AsOutLinkProps<T>;
