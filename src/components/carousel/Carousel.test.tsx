import React from 'react';
import { act, render, screen } from '@testing-library/react';
import Theme from '../Theme';
import { Carousel } from './Carousel';

test('renders a ServiceCard', () => {
  const { container } = render(
    <Theme>
      <Carousel>
        <div>card1</div>
        <div>card2</div>
        <div>card3</div>
      </Carousel>
    </Theme>
  )
  expect(container).toMatchSnapshot()
});

test('jumps to card3 when pagination item n°3 is clicked', async () => {
  render(
    <Theme>
      <Carousel>
        <div data-testid="card1">card n°1</div>
        <div data-testid="card2">card n°2</div>
        <div data-testid="card3">card n°3</div>
      </Carousel>
    </Theme>
  )

  const items = screen.getAllByRole("listitem")
  expect(items[0].className).toContain('active')
  expect(items[1].className).not.toContain('active')
  expect(items[2].className).not.toContain('active')

  expect(screen.getByTestId('card1').parentElement?.className).toContain('active')
  expect(screen.getByTestId('card2').parentElement?.className).not.toContain('active')
  expect(screen.getByTestId('card3').parentElement?.className).not.toContain('active')

  act(() => {
    items[2].click()
  });

  expect(items[0].className).not.toContain('active')
  expect(items[1].className).not.toContain('active')
  expect(items[2].className).toContain('active')

  expect(screen.getByTestId('card1').parentElement?.className).not.toContain('active')
  expect(screen.getByTestId('card2').parentElement?.className).not.toContain('active')
  expect(screen.getByTestId('card3').parentElement?.className).toContain('active')

});
