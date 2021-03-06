/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconAccount: React.SFC<Props> = ({
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
      <path d="M31.043 11.843c3.766 0 6.82 3.015 6.82 6.734 0 3.72-3.054 6.734-6.82 6.734-3.767 0-6.82-3.015-6.82-6.734.01-3.715 3.057-6.727 6.82-6.734zm7.107 14.666c2.213-1.948 3.6-4.772 3.6-7.916C41.75 12.742 36.946 8 31.023 8s-10.726 4.744-10.726 10.593c0 3.279 1.508 6.21 3.877 8.152l.018.013C17 29.694 12.027 36.554 12 44.566v8.684c.096.986.93 1.75 1.946 1.75 1.015 0 1.85-.764 1.944-1.742V44.57c0-8.516 6.99-15.416 15.61-15.416s15.61 6.902 15.61 15.415v8.681c.096.986.93 1.75 1.946 1.75s1.85-.764 1.944-1.742V44.57c-.022-8.257-5.296-15.29-12.698-18.018l-.135-.044-.017.002z" />
    </svg>
  );
};
