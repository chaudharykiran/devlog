import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TopNavigation } from '../top-navigation';

describe('TopNavigation', () => {
  // Arrange - set up the test
  const renderWithRouter = (component: React.ReactElement) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it('renders without crashing', () => {
    // Arrange
    const component = <TopNavigation />;

    // Act
    const { container } = renderWithRouter(component);

    // Assert
    expect(container).toBeInTheDocument();
  });

  it('displays the site title with correct link', () => {
    // Arrange
    const component = <TopNavigation />;

    // Act
    const { getByRole } = renderWithRouter(component);

    // Assert
    const titleLink = getByRole('link', { name: 'TechBlog' });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', '/');
  });
});