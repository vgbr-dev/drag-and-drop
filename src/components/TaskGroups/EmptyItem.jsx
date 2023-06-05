/**
 * @file Contains `EmptyItem` React component.
 * @module EmptyItem
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import useEmptyItem from '../../hooks/useEmptyItem';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Event related to drag and drop html elements.
 *
 * @typedef  {React.DragEvent<HTMLLIElement>} DragEvent
 */

/**
 * The callback function for the drop event.
 *
 * @typedef  {(event: DropEvent, targetId: string) => void} OnDrop
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `EmptyItem` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {OnDrop} props.onDrop - The callback function to handle the drop event.
 * @returns {JSX.Element} The rendered component.
 */
const EmptyItem = ({ onDrop }) => {
  const { isDraggingOver, handleDragStart, handleDragOver, handleDragLeave, handleDrop } = useEmptyItem(onDrop); // eslint-disable-line prettier/prettier

  return (
    <li
      className={`empty-item${isDraggingOver ? ' empty-item--dragging' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <span className="empty-item__icon">add</span>
    </li>
  );
};

EmptyItem.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default EmptyItem;
