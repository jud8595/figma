import React from 'react';


export type SvgItemProps = {
  height: number,
  width: number,
  children?: JSX.Element | JSX.Element[]
}

export const SvgItem: React.FC<SvgItemProps> = ({ height, width, children }) => {
  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{verticalAlign: 'middle'}}>
      { children }
    </svg>
  )
}

