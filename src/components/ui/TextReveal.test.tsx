import { render, screen } from '@testing-library/react';
import { TextReveal } from './TextReveal';

describe('TextReveal', () => {
  it('renders the provided text', () => {
    const testText = 'Hello World';
    render(<TextReveal text={testText} />);

    // Check if each word is rendered
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('splits the text into individual words as spans', () => {
    const testText = 'Multiple words test';
    const { container } = render(<TextReveal text={testText} />);

    // Each word should be in its own span (based on the component implementation)
    const spans = container.querySelectorAll('span');
    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent('Multiple');
    expect(spans[1]).toHaveTextContent('words');
    expect(spans[2]).toHaveTextContent('test');
  });

  it('applies the provided className to the container', () => {
    const customClass = 'custom-test-class';
    const { container } = render(<TextReveal text="test" className={customClass} />);

    // The container is the first div rendered by motion.div
    expect(container.firstChild).toHaveClass(customClass);
  });
});
