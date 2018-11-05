/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: string;
  title?: string;
}

export const IconEmail: React.SFC<Props> = ({
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
      <path d="M57.162 48.464c0 1.646-1.2 2.697-2.05 2.697V54c2.849 0 4.884-2.792 4.884-5.535H57.16l.002-.001zm-2.048 2.695H8.886V54h46.228v-2.84zm-46.228 0c-.85 0-2.05-1.049-2.05-2.697H4c0 2.742 2.036 5.534 4.884 5.534v-2.839l.002.002zm-2.048-2.695V15.536H4.002v32.928h2.836zm0-32.928c0-1.646 1.2-2.697 2.05-2.697V10c-2.849 0-4.884 2.792-4.884 5.535h2.835l-.001.001zm2.048-2.695h46.228V10H8.886v2.84zm46.228 0c.85 0 2.05 1.049 2.05 2.697H60c0-2.742-2.036-5.534-4.884-5.534v2.839l-.002-.002zm2.048 2.695v32.928h2.836V15.536h-2.836zm-4.655 8.009a1.42 1.42 0 0 0 .262-1.99 1.416 1.416 0 0 0-1.987-.262l1.725 2.252zm-20.51 13.966l-.862 1.126c.51.391 1.216.391 1.726 0l-.863-1.126zM13.215 21.293a1.416 1.416 0 0 0-1.987.262 1.42 1.42 0 0 0 .261 1.99l1.726-2.252zm37.568 0L31.135 36.385l1.726 2.252 19.646-15.092-1.725-2.252zM32.86 36.385L13.214 21.293l-1.726 2.252 19.647 15.092 1.726-2.252zm-21.304 5.391a1.421 1.421 0 0 0-.378 1.971c.44.65 1.32.82 1.97.38l-1.592-2.351zm9.68-3.138a1.42 1.42 0 0 0 .38-1.971 1.416 1.416 0 0 0-1.97-.38l1.59 2.352zm-8.089 5.488l8.09-5.487-1.591-2.351-8.09 5.488 1.591 2.35zm37.702.002a1.418 1.418 0 1 0 1.591-2.35l-1.591 2.35zm-6.499-7.839a1.418 1.418 0 0 0-1.97.38 1.422 1.422 0 0 0 .38 1.971l1.59-2.35zm8.09 5.488l-8.09-5.488-1.59 2.351 8.089 5.488 1.591-2.35z" />
    </svg>
  );
};