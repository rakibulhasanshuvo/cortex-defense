import '@testing-library/jest-dom';

// Mock framer-motion since it doesn't play well with JSDOM
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
      nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
      a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: jest.fn(() => ({
      scrollY: {
        get: jest.fn(() => 0),
        onChange: jest.fn(),
      },
    })),
    useMotionValueEvent: jest.fn(),
    useSpring: jest.fn((val) => val),
  };
});
