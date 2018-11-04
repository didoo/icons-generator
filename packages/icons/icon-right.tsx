/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconRight: React.SFC<Props> = ({
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
      <path d="M39.51 31.94L18.948 55.261a2.787 2.787 0 0 0 .01 3.93 2.761 2.761 0 0 0 3.915-.011l22.248-25.226c.023-.023.062-.017.083-.034A2.764 2.764 0 0 0 46 31.918a2.722 2.722 0 0 0-.807-1.989c-.023-.027-.062-.017-.09-.038L22.727 4.806a2.772 2.772 0 0 0-3.926.017 2.799 2.799 0 0 0 .011 3.93L39.508 31.94l.002-.002z" />
    </svg>
  );
};
