import { render, screen } from '@testing-library/react';

import UserModel from '../src/components/model';

test('test user model ', () => {
  render(<UserModel loading={false} showModel={true} setShowModel={() => {}} editRecord={{}} titles={[]}/>);

  const element  = screen.getByTestId('user-model');
  expect(element).toBeInTheDocument();
})