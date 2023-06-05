/**
 * @file Contains `TaskItem` React component.
 * @module TaskItem
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import { useState } from 'react';

// » IMPORT CUSTOM HOOKS
import useTasksConsumer from '../../hooks/useTasksConsumer';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The importance level of a task.
 *
 * @typedef {"low"|"normal"|"high"} Importance
 */

/**
 * Represents a task.
 *
 * @typedef  {object}     Task
 * @property {string}     id         - The ID of the task.
 * @property {string}     title      - The title of the task.
 * @property {string}     category   - The category of the task.
 * @property {Importance} importance - The importance level of the task.
 * @property {boolean}    done       - Indicates whether the task is done or not.
 */

/**
 * Represents an array of tasks.
 *
 * @typedef {Array<Task>} Tasks
 */

/**
 * Event related to drag and drop html elements.
 *
 * @typedef  {React.DragEvent<HTMLLIElement>} DragEvent
 */

/**
 * The callback function for the drop start event.
 *
 * @typedef  {(event: DragEvent) => void} OnDragStart
 */

/**
 * The callback function for the drop start event.
 *
 * @typedef  {(event: DragEvent) => void} OnDragOver
 */

/**
 * The callback function for the drop event.
 *
 * @typedef  {(event: DropEvent, targetId: string) => void} OnDrop
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskItem` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {Task} props.task -  The task object.
 * @param {OnDragStart} props.onDragStart -  The callback function to handle the drop start event.
 * @param {OnDragOver} props.onDragOver -  The callback function to handle the drop over event.
 * @param {OnDrop} props.onDrop -  The callback function to handle the drop over event.
 * @returns {JSX.Element} The rendered component.
 */
const TaskItem = ({ task, onDragStart, onDragOver, onDrop }) => {
  const [isDraggable, setIsDraggable] = useState(false);
  const { selectTask, deleteTask } = useTasksConsumer();

  /**
   * Function to edit a task.
   *
   */
  const onEdit = () => {
    selectTask(task.id);
  };

  /**
   * Function to delete a task.
   *
   */
  const onDelete = () => {
    deleteTask(task.id);
  };

  /**
   * Handles the drag start event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragStart = event => {
    if (isDraggable) {
      event.dataTransfer.setData('text/plain', task.id);
      setIsDraggable(true);
      onDragStart();
    } else {
      event.preventDefault();
    }
  };

  /**
   * Handles the drag end event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragEnd = () => {
    setIsDraggable(false);
  };

  /**
   * Handles the drop event in the component.
   *
   * @param {DragEvent} event - The drop event.
   */
  const handleDrop = event => {
    onDrop(event, task.id);
  };

  /**
   * Handles the mouse down event in the component.
   *
   */
  const handleMouseDown = () => {
    setIsDraggable(true);
  };

  /**
   * Handles the mouse out event in the component.
   *
   */
  const handleMouseOut = () => {
    setIsDraggable(false);
  };

  /**
   * Handles the blur event in the component.
   *
   */
  const handleBlur = () => {
    setIsDraggable(false);
  };

  return (
    <li
      className={`task-item${isDraggable ? ' task-item--dragging' : ''}`}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragOver={onDragOver}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
    >
      <span className="task-item__controls">
        <span
          className="task-item__dragger"
          role="presentation"
          onMouseDown={handleMouseDown}
          onMouseOut={handleMouseOut}
          onBlur={handleBlur}
        >
          drag_indicator
        </span>
        <button type="button" className="task-item__button" onClick={onEdit}>
          edit
        </button>
        <button type="button" className="task-item__button" onClick={onDelete}>
          delete
        </button>
      </span>
      <span className="task-item__title">{task.title}</span>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    importance: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskItem;
