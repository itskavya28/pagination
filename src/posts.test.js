import { render, screen } from '@testing-library/react';

import Posts from '../src/components/posts';

test('test user cards ', () => {
  render(<Posts posts={[]} loading={false} setShowModel={() =>{}} setEditRecord={() => {}}/>);

  const element  = screen.getByTestId('user-cards-testid');
  expect(element).toBeInTheDocument();
})