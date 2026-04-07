import { render } from '@testing-library/react';
import { FloatingShapes } from './FloatingShapes';

// Mock framer-motion to avoid issues with animation in JSDOM
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('FloatingShapes', () => {
  it('renders correctly', () => {
    const { container } = render(<FloatingShapes />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders 5 data particles', () => {
    const { container } = render(<FloatingShapes />);
    // The data particles have a specific class pattern or we can count them
    // They are the last 5 motion.divs in the component
    // Based on the code:
    // 1. Rotating Cyber Ring 1
    // 2. Neural Node 1
    // 3. Hexagon 2
    // 4-8. Small Data Particles (5 of them)

    const divs = container.querySelectorAll('.absolute.bottom-\\[10\\%\\]');
    // The particles have "absolute bottom-[10%] right-[20%]"
    // But there might be other divs. Let's be more specific.
    const particles = container.querySelectorAll('.bg-gradient-to-t');
    expect(particles).toHaveLength(5);
  });
});
