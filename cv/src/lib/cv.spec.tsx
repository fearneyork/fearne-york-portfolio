import { render } from '@testing-library/react';

import Cv from './cv';

describe('Cv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cv />);
    expect(baseElement).toBeTruthy();
  });
});
