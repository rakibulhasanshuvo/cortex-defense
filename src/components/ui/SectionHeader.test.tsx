import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  const defaultProps = {
    title: 'Test Title',
  };

  it('renders the title correctly', () => {
    render(<SectionHeader {...defaultProps} />);
    // SectionHeader uses TextReveal which splits text into words
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    const subtitle = 'Test Subtitle';
    render(<SectionHeader {...defaultProps} subtitle={subtitle} />);
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<SectionHeader {...defaultProps} />);
    // Subtitle is rendered as a motion.span if it exists
    const subtitleElement = screen.queryByText(/Test Subtitle/i);
    expect(subtitleElement).not.toBeInTheDocument();
  });

  it('applies center alignment by default', () => {
    const { container } = render(<SectionHeader {...defaultProps} />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('text-center');

    // Check the flex container for TextReveal
    const flexContainer = container.querySelector('.flex');
    expect(flexContainer).toHaveClass('justify-center');

    // Check the divider
    const divider = container.querySelector('.h-px');
    expect(divider).toHaveClass('mx-auto');
  });

  it('applies left alignment when align prop is "left"', () => {
    const { container } = render(<SectionHeader {...defaultProps} align="left" />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('text-left');

    // Check the flex container for TextReveal
    const flexContainer = container.querySelector('.flex');
    expect(flexContainer).toHaveClass('justify-start');

    // Check the divider
    const divider = container.querySelector('.h-px');
    expect(divider).toHaveClass('mr-auto');
  });

  it('applies custom className', () => {
    const customClass = 'custom-header-class';
    const { container } = render(<SectionHeader {...defaultProps} className={customClass} />);
    expect(container.firstChild as HTMLElement).toHaveClass(customClass);
  });
});
