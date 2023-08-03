import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { About } from '.';

describe('<About/>', async () => {
  it('should be render About in the component', () => {
    render(
      <Router>
        <About />
      </Router>,
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
