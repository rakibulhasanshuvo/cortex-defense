import { render, screen, act } from '@testing-library/react';
import { Navbar } from './Navbar';
import { useMotionValueEvent } from 'framer-motion';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Navbar', () => {
  it('renders branding and navigation items', () => {
    render(<Navbar />);
    expect(screen.getByText('CORTEX')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Network')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
    expect(screen.getByText('Whitepaper')).toBeInTheDocument();
  });

  it('updates background state when scrolled past threshold', async () => {
    // Capture the callback from useMotionValueEvent
    let scrollCallback: (latest: number) => void = () => {};
    (useMotionValueEvent as jest.Mock).mockImplementation((_motionValue, _event, callback) => {
      scrollCallback = callback;
    });

    const { container } = render(<Navbar />);

    // Initial state: not scrolled
    const navContainer = container.querySelector('.glass');
    expect(navContainer).not.toHaveClass('bg-black/80');

    // Manually trigger the scroll callback with value past 50px
    act(() => {
      scrollCallback(100);
    });

    // Check if scrolled class is applied
    expect(navContainer).toHaveClass('bg-black/80');

    // Trigger scroll back to top
    act(() => {
      scrollCallback(0);
    });

    expect(navContainer).not.toHaveClass('bg-black/80');
  });
});
