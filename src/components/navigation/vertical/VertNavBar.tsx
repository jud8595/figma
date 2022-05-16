import React from 'react';
import styled from 'styled-components';


export type VertNavBarProps = {
  children?: JSX.Element | JSX.Element[]
}

export const VertNavBar: React.FC<VertNavBarProps> = ({children}) => {
    return (
      <>
      { 
        <Navigation>
          <Menu>
            {
              React.Children.map(children, child => <Item>{child}</Item>)
            }
          </Menu>
        </Navigation>
      }
      </>
    )
}

const Navigation = styled('nav')`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.neutral1};
  border-radius: 8px;
  padding: 8px 0px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.15);;
`;

const Menu = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled('li')`
  padding: 8px 16px;
  text-align: left;
  
  &:hover {
    background-color: ${props => props.theme.colors.neutral3};
  }
`;
