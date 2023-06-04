/**
 * @file Contains `EventList` React component.
 * @module EventList
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import EventListItem from './EventListItem';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `EventList` component displays the list of events.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {string} props.dragEvent - The current drag event.
 * @returns {JSX.Element} The rendered component.
 */
const EventList = ({ dragEvent }) => (
  <ul className="event-list">
    <EventListItem dragEvent={dragEvent} target="drag-start" text="DRAG START" />
    <EventListItem dragEvent={dragEvent} target="drag-enter" text="DRAG ENTER" />
    <EventListItem dragEvent={dragEvent} target="drag-over" text="DRAG OVER" />
    <EventListItem dragEvent={dragEvent} target="drag-leave" text="DRAG LEAVE" />
    <EventListItem dragEvent={dragEvent} target="drag-end" text="DRAG END" />
    <EventListItem dragEvent={dragEvent} target="drop" text="DROP" />
  </ul>
);

EventList.propTypes = {
  dragEvent: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default EventList;
