/**
 * @file Contains `EventList` React component.
 * @module EventList
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `EventListItem` component, represents an item in the event list.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {string} props.event - The current drag event.
 * @param {string} props.target - The target event.
 * @param {string} props.text - The text to display.
 * @returns {JSX.Element} The rendered component.
 */
const EventListItem = ({ dragEvent, target, text }) => (
  <li className={`event-list__item ${dragEvent === target ? 'event-list__item--active' : ''}`}>
    {text}
  </li>
);

EventListItem.propTypes = {
  dragEvent: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default EventListItem;
