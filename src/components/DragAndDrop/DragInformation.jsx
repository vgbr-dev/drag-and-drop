/**
 * @file Contains `DragInformation` React component.
 * @module DragInformation
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `DragInfo` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {string} props.status - The current status of the drag operation.
 * @param {string} props.data - The data associated with the dragged element.
 * @returns {JSX.Element} The rendered component.
 */
const DragInformation = ({ status, data }) => (
  <div className="drag-information">
    <span className="drag-information__status">Status: {status}</span>
    <span className="drag-information__data">Data: {data}</span>
  </div>
);

DragInformation.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default DragInformation;
