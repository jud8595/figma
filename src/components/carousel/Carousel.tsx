import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utility/breakpoint';


export type CarouselProps = {
  children?: JSX.Element | JSX.Element[]
}

export const Carousel: React.FC<CarouselProps> = ({children}) => {

  const [position, setPosition] = useState(0)

  return  (
    <Container role="slider" aria-labelledby="carousel" aria-valuemin={1} aria-valuemax={Children.count(children)} aria-valuenow={position+1}>
      <Cards>
        {
          React.Children.map(children, (child, index) => <Card className={position===index?'active':''}>{child}</Card>)
        }
      </Cards>
    
      <Pagination>
        {
          React.Children.map(children, (_, index) => <Bullet className={position===index?'active':''} onClick={() => setPosition(index)} />)
        }
      </Pagination>
    </Container>
  )
}

const Container = styled('div')`
  margin-top: 64px;
`;

const Cards = styled('div')`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 24px;
`;

const Card = styled('div')`
  display: flex;
  :not(.active) {
    display: none;
  }
  
  @media (min-width: ${breakpoints.TABLET}) {
    :not(.active) {
      display: flex;
    }
  }

  @media (min-width: ${breakpoints.LAPTOP}) {
    display: inline-block;
    width: 320px;
  }
`;

const Pagination = styled('ul')`
  text-align: center;
  & > li {
    display: inline-block;
  }

  @media (min-width: ${breakpoints.TABLET}) {
    display: none;
  }
`;

const Bullet = styled('li')`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 10px;
  background-color: ${props => props.theme.colors.neutral3};

  &.active {
    background-color: ${props => props.theme.colors.primary1};
  }
`;

