import React from 'react';
import styled from 'styled-components';
import { bodyBook16, heading32, headline16 } from '../../utility/typography';

export interface ServiceCardData {
  smallTitle: string
  title: string
  content: string
}

export const ServiceCard: React.FC<ServiceCardData> = ({smallTitle, title, content}) => {
    return  (
      <CardStyled>
        <SmallTitle>{smallTitle}</SmallTitle>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonSquare>{'>'}</ButtonSquare>
      </CardStyled>
    )
}

const CardStyled = styled('div')`
  background-color: ${props => props.theme.colors.primary1};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  min-height: 344px;
  padding: 32px;
  text-align: left;

  display: flex;
  flex-direction: column;

  &>*:last-child {
    align-self: flex-end;
    margin-top: auto;
  };
`;

const Title = styled('div')`
  ${heading32}
  margin-bottom: 24px;
`;

const SmallTitle = styled('div')`
  ${headline16}
  margin-bottom: 24px;
`;

const Content = styled('div')`
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  ${bodyBook16}
`;

const ButtonSquare = styled('button')`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent1};
  width: 64px;
  height: 64px;
  border-radius: 8px;
  padding: 16px;
  border-style: none;
  border-width: 0;
`;
