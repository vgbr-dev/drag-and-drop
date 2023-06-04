/**
 * @file Contains `DragSource` React component.
 * @module DragSource
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Contains details about a drag event in the context of drag and drop.
 *
 * @typedef {React.DragEvent<HTMLDivElement>} DragEvent
 */

/**
 * Handles the `DragStart` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragStart
 */

/**
 * Handles the `dragEnd` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragEnd
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `DragSource` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {boolean} props.dragging - Indicates whether an element is being dragged.
 * @param {HandleDragStart} props.handleDragStart - Handles the `DragStart` event.
 * @param {HandleDragEnd} props.handleDragEnd - Handles the `dragEnd` event.
 * @returns {JSX.Element} The rendered component.
 */
const DragSource = ({ dragging, handleDragStart, handleDragEnd }) => (
  <div
    id="drag-source"
    className={`drag-source ${dragging ? 'drag-source--dragging' : ''}`}
    draggable
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}
  >
    Elemento arrastrable
  </div>
);

DragSource.propTypes = {
  dragging: PropTypes.bool.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default DragSource;
