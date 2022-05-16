import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utility/breakpoint';
import { TextItem } from './TextItem';


export type HorNavBarProps = {
  children?: JSX.Element | JSX.Element[]
}

export const HorNavBar: React.FC<HorNavBarProps> = ({children}) => { 
    return  (
      <Navigation>
        <Burger />
        <Menu>
            {
              React.Children.map(children, child => <Item>{child}</Item>)
            }
        </Menu>
      </Navigation>
    )
}

const Navigation = styled('nav')`
  background-color: ${props => props.theme.colors.primary1};
  color: ${props => props.theme.colors.white};
  width: 100%;
`;

const Menu = styled('ul')`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: right;
  margin-right: 40px;

  @media (min-width: ${breakpoints.TABLET}) {
    display: block;
  }
`;

const Item = styled('li')`
  display: inline-block;
  padding: 32px 16px;
  cursor: pointer;
`;

const BurgerMenu = styled(Menu)`
  display: block;

  @media (min-width: ${breakpoints.TABLET}) {
    display: none;
  }
`;

const Burger: React.FC = () => { 
  return  (
    <BurgerMenu>
      <Item>
        <TextItem>☰</TextItem>
      </Item>
    </BurgerMenu>
  )
}



