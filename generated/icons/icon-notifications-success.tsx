/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconNotificationsSuccess: React.SFC<Props> = ({
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
      <path
        fillRule="evenodd"
        d="M32 59c14.91 0 27-12.088 27-27S46.91 5 32 5 5 17.088 5 32s12.09 27 27 27zm-5.55-21.706l-.036-.021-4.887-4.888a2.699 2.699 0 1 0-3.816 3.818l8.594 8.596a.147.147 0 0 0 .207.002l20.504-19.716a2.699 2.699 0 1 0-3.743-3.893L26.551 37.273a.093.093 0 0 1-.102.02z"
      />
    </svg>
  );
};
