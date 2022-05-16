import React, { useState } from 'react';
import styled from 'styled-components';
import { VertNavBar } from '../vertical/VertNavBar';
import { TextItem } from './TextItem';
import { TextItem as VerticalTextItem } from '../vertical/TextItem';
import { SvgItem } from './SvgItem';


export type DropdownItemProps = {
  title: string,
  children?: JSX.Element | JSX.Element[]
}

export const DropDownItem: React.FC<DropdownItemProps> = ({title, children}) => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <div onMouseMove={() => setShow(true)} onMouseOut={() => setShow(false)}>

      <TextItem>{title}</TextItem>

      <Chevron>
        <SvgItem height={16} width={16}>
          <path d="M1.94,5.86l1.29-1.3L7.44,8.84l4.2-4.28,1.3,1.3-5.5,5.58Z"></path>
        </SvgItem>
      </Chevron>

      {
        show &&
          <VertNavBarContainer onMouseMove={() => setShow(true)} onMouseOut={() => setShow(false)} >
            <VertNavBar>{ children }</VertNavBar>
          </VertNavBarContainer>
      }
    </div>
  )
}

const VertNavBarContainer = styled('div')`
  position: absolute;
  padding-top: 10px;
`;

const Chevron = styled('span')`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;


export { VerticalTextItem as DropDownTextItem}
