/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconCard: React.SFC<Props> = ({
  size,
  title,

  children,

  ...svgProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '1rem'}
      height={size || '1rem'}
      viewBox="0 0 64 64"
      {...svgProps}
    >
      {title && <title>{title}</title>}
      <path d="M54.75 10H9.25C6.362 10 4 12.306 4 15.125v30.75C4 48.695 6.362 51 9.25 51h45.5c2.888 0 5.25-2.306 5.25-5.125v-30.75C60 12.305 57.638 10 54.75 10zm-45.5 3.417h45.5c.948 0 1.75.783 1.75 1.708v5.125h-49v-5.125c0-.925.802-1.708 1.75-1.708zm45.5 34.166H9.25c-.948 0-1.75-.783-1.75-1.708V30.5h49v15.375c0 .925-.802 1.708-1.75 1.708zM11 37.333h3.5v6.834H11v-6.834zm7 0h3.5v6.834H18v-6.834zm7 0h3.5v6.834H25v-6.834z" />
    </svg>
  );
};
