/**
 * @file Contains `DragAndDrop` React component.
 * @module DragAndDrop
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT CUSTOM HOOKS
import useDragAndDrop from '../../hooks/useDragAndDrop';

// » IMPORT COMPONENTS
import EventList from './EventList';
import DropTarget from './DropTarget';
import DragSource from './DragSource';
import DragInformation from './DragInformation';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `DragAndDrop` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const DragAndDrop = () => {
  const {
    dragEvent,
    dragging,
    status,
    data,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDragEnd,
    handleDrop,
  } = useDragAndDrop();

  return (
    <main className="main-content">
      <aside className="aside-content">
        <h2 className="event-title">Events</h2>
        <EventList dragEvent={dragEvent} />
      </aside>
      <section className="drags-content">
        <DragSource
          dragging={dragging}
          handleDragStart={handleDragStart}
          handleDragEnd={handleDragEnd}
        />
        <DropTarget
          dragEvent={dragEvent}
          handleDragEnter={handleDragEnter}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
        />
        <DragInformation status={status} data={data} />
      </section>
    </main>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default DragAndDrop;
