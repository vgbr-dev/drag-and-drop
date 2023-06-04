/**
 * @file Contains `DropTarget` React component.
 * @module DropTarget
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
 * Handles the `dragEnter` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragEnter
 */

/**
 * Handles the `dragOver` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragOver
 */

/**
 * Handles the `dragLeave` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragLeave
 */

/**
 * Handles the `drop` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDrop
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `DropTarget` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {string} props.dragEvent - The current drag event.
 * @param {HandleDragEnter} props.handleDragEnter - Handles the `dragEnter` event.
 * @param {HandleDragOver} props.handleDragOver - Handles the `dragOver` event.
 * @param {HandleDragLeave} props.handleDragLeave - Handles the `dragLeave` event.
 * @param {HandleDrop} props.handleDrop - Handles the `drop` event.
 * @returns {JSX.Element} The rendered component.
 */
const DropTarget = ({
  dragEvent,
  handleDragEnter,
  handleDragOver,
  handleDragLeave,
  handleDrop,
}) => (
  <div
    id="drop-target"
    className={`drop-area ${dragEvent === 'drag-over' ? 'drop-area--drag-over' : ''}`}
    onDragEnter={handleDragEnter}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    Área de destino
  </div>
);

DropTarget.propTypes = {
  dragEvent: PropTypes.string.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default DropTarget;
