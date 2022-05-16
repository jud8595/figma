import React from 'react';
import { render } from '@testing-library/react';
import { ServiceCard } from './ServiceCard';
import Theme from '../Theme';

test('renders a ServiceCard', () => {
  const { container } = render(
    <Theme>
      <ServiceCard smallTitle='mySmallTitle' title='myTitle' content='myContent' />
    </Theme>
  )
  expect(container).toMatchSnapshot()
});
