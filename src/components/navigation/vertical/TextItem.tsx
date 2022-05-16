import React from 'react';
import styled from 'styled-components';
import { bodyBook16 } from '../../../utility/typography';


export const TextItem = styled('a')`
  ${bodyBook16};
  color: ${props => props.theme.colors.neutral1};
  text-decoration: none;
`;

