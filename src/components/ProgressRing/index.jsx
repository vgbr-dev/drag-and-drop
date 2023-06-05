/**
 * @file Contains `ProgressRing` React component.
 * @module ProgressRing
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ProgressRing` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {number} props.total - The total value for which progress is displayed.
 * @param {number} props.completed - The currently completed value.
 * @returns {JSX.Element} The rendered component.
 */
const ProgressRing = ({ total, completed }) => {
  const percentage = Math.round((completed / total) * 100);

  const progressStyle = {
    background: `radial-gradient(closest-side, #333333 80%, transparent 80% 100%), conic-gradient( #3EA6F5 ${percentage}%, #242424 0)`,
  };

  return (
    <div className="progress-ring" style={progressStyle}>
      {percentage}%
    </div>
  );
};

ProgressRing.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ProgressRing;
