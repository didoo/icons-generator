/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconWhatsapp: React.SFC<Props> = ({
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
      <path d="M32.4 9C19.387 9 8.8 19.586 8.8 32.6c0 4.117 1.077 8.162 3.117 11.72L8.041 55.947a.8.8 0 0 0 .962 1.027l12.694-3.34A23.662 23.662 0 0 0 32.4 56.2C45.414 56.2 56 45.614 56 32.6 56 19.586 45.414 9 32.4 9zm14.726 34.316l-1.406 1.407C43.944 46.5 41.962 47.4 39.832 47.4c-2.872 0-5.969-1.64-9.202-4.874l-8.155-8.155c-2.55-2.55-4.118-5.028-4.659-7.365-.656-2.837.172-5.436 2.462-7.725l1.407-1.407c.905-.905 2.368-1.128 3.502-.528 2.13 1.128 4.335 4.82 4.58 5.238.442.774.577 1.574.387 2.26a2.088 2.088 0 0 1-.95 1.24c-.647.542-1.405 1.215-1.538 1.386-.813 1.2-.72 2.12.327 3.168l6.37 6.37c1.056 1.057 1.96 1.144 3.179.318.16-.125.833-.883 1.374-1.53.404-.667 1.066-1.033 1.87-1.033.528 0 1.088.16 1.622.464.426.25 4.12 2.457 5.246 4.586a2.966 2.966 0 0 1-.528 3.503z" />
    </svg>
  );
};
