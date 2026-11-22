import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './accordion';

describe('Accordion Component', () => {
  const items = [
    { id: 'item-1', title: 'Section 1', content: 'Content for section 1' },
    { id: 'item-2', title: 'Section 2', content: 'Content for section 2' },
    { id: 'item-3', title: 'Section 3', content: 'Content for section 3', disabled: true },
  ];

  it('renders accordion items correctly', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Section 1')).toBeDefined();
    expect(screen.getByText('Section 2')).toBeDefined();
    expect(screen.getByText('Section 3')).toBeDefined();
  });

  it('toggles single item when clicked and respects collapsible={false}', () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Accordion items={items} type="single" collapsible={true} onChange={handleChange} />
    );

    fireEvent.click(screen.getByText('Section 1'));
    expect(handleChange).toHaveBeenCalledWith('item-1');

    // Click again to collapse when collapsible is true
    fireEvent.click(screen.getByText('Section 1'));
    expect(handleChange).toHaveBeenCalledWith('');

    // When collapsible is false
    const handleNonCollapsibleChange = jest.fn();
    rerender(
      <Accordion
        items={items}
        type="single"
        defaultValue="item-1"
        collapsible={false}
        onChange={handleNonCollapsibleChange}
      />
    );
    fireEvent.click(screen.getByText('Section 1'));
    expect(handleNonCollapsibleChange).toHaveBeenCalledWith('item-1');
  });

  it('toggles multiple items on and off when type is multiple', () => {
    const handleChange = jest.fn();
    render(<Accordion items={items} type="multiple" onChange={handleChange} />);

    // Toggle on item-1
    fireEvent.click(screen.getByText('Section 1'));
    expect(handleChange).toHaveBeenCalledWith(['item-1']);

    // Toggle on item-2
    fireEvent.click(screen.getByText('Section 2'));
    expect(handleChange).toHaveBeenCalledWith(['item-1', 'item-2']);

    // Toggle off item-1
    fireEvent.click(screen.getByText('Section 1'));
    expect(handleChange).toHaveBeenCalledWith(['item-2']);
  });

  it('does not toggle disabled items', () => {
    const handleChange = jest.fn();
    render(<Accordion items={items} onChange={handleChange} />);

    fireEvent.click(screen.getByText('Section 3'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('supports controlled value, custom icons, and sizes', () => {
    render(
      <Accordion
        items={items}
        value="item-1"
        size="lg"
        variant="card"
        expandIcon={(isOpen) => <span>{isOpen ? 'Expanded' : 'Collapsed'}</span>}
        collapseIcon={<span>CustomCollapse</span>}
      />
    );
    expect(screen.getByText('Expanded')).toBeDefined();
  });

  it('handles empty items array gracefully', () => {
    render(<Accordion />);
    expect(screen.queryByText('Section 1')).toBeNull();
  });
});
