/**
 * @file Contains `useTaskLists` custom hook.
 * @module useTaskLists
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// » IMPORT HOOKS
import useTasksByDone from './useTasksByDone';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The level of importance for a task.
 *
 * @typedef {"low"|"normal"|"high"} Importance
 */

/**
 * The stage of completion for a task.
 *
 * @typedef {"not_started"|"in_progress"|"completed"|"waiting_on_others"|"deferred"} Status
 */

/**
 * Represents a task with its associated properties such as ID, title, category,
 * importance, and status.
 *
 * @typedef {Object}      Task
 * @property {string}     id         - The ID of the task.
 * @property {string}     title      - The title of the task.
 * @property {string}     category   - The category of the task.
 * @property {Importance} importance - The importance level of the task.
 * @property {Status}     status     - The status of the task.
 */

/**
 * Defines a collection of tasks with their associated properties.
 *
 * @typedef {Array<Task>} Tasks
 */

/**
 * Event related to drag and drop html elements.
 *
 * @typedef  {React.DragEvent<HTMLLIElement>} DragEvent
 */

/**
 * The function that handles the drag start event on the component.
 *
 * @typedef  {(event: DragEvent) => void} HandleDragStart
 */

/**
 * The function that handles the drag over event on the component.
 *
 * @typedef  {(event: DragEvent) => void} HandleDragOver
 */

/**
 * The function that handles the drop event on the component.
 *
 * @typedef  {(event: DragEvent) => void} HandleDrop
 */

/**
 * An object with The state and functions for managing of component.
 *
 * @typedef  {object}          TaskListsHook
 * @property {Tasks}           tasks           - The data associated with the drop event.
 * @property {HandleDragStart} handleDragStart - The element that is the target of the drop event.
 * @property {HandleDragOver}  handleDragOver  - Indicates whether the default action of the event has been prevented.
 * @property {HandleDrop}      handleDrop      - Prevents the default action of the event from occurring.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom hook for managing task lists.
 *
 * @hook
 * @param {boolean} done - The done status of the tasks to filter.
 * @returns {TaskListsHook} - An object with The state and functions for managing of component.
 */
const useTaskLists = done => {
  const { tasks, updateTaskDone } = useTasksByDone(done);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tasks);
  }, [tasks, done]);

  /**
   * Handles the drag start event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragStart = () => {
    // Handle drag start logic here
  };

  /**
   * Handles the drag over event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  /**
   * Handles the drop event in the component.
   *
   * @param {DropEvent} event - The drop event.
   * @param {string} targetId - The id target.
   */
  const handleDrop = (event, targetId) => {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData('text/plain');
    const taskExists = tasks.some(item => item.id === draggedItemId);
    if (!taskExists) {
      updateTaskDone(draggedItemId, done);
      return;
    }

    const draggedItemIndex = items.findIndex(item => item.id === draggedItemId);
    const targetItemIndex = items.findIndex(item => item.id === targetId);

    if (draggedItemIndex === targetItemIndex) {
      return;
    }

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(targetItemIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return {
    tasks: items,
    handleDragStart,
    handleDragOver,
    handleDrop,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTaskLists;
