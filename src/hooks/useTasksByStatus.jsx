/**
 * @file A custom hook for filtering tasks by status.
 * @module useTasksByStatus
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { useEffect, useState } from 'react';
import useTasksConsumer from './useTasksConsumer';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The importance level of a task.
 *
 * @typedef {"low"|"normal"|"high"} Importance
 */

/**
 * The allowed values for the task status.
 *
 * @typedef {"not_started"|"in_progress"|"completed"|"waiting_on_others"|"deferred"} Status
 */

/**
 * Represents a task.
 *
 * @typedef  {object}     Task
 * @property {string}     id         - The ID of the task.
 * @property {string}     title      - The title of the task.
 * @property {string}     category   - The category of the task.
 * @property {Importance} importance - The importance level of the task.
 * @property {Status}     status     - Indicates whether the task is done or not.
 */

/**
 * Represents an array of tasks.
 *
 * @typedef {Array<Task>} Tasks
 */

/**
 * Function for updating the status of a task.
 *
 * @typedef {(taskId: string, targetStatus: Status) => void} UpdateTaskStatus
 */

/**
 * An object with the tasks filtered by their status and a function to change
 * their status.
 *
 * @typedef  {object}           TasksByStatusHook
 * @property {Tasks}            tasks             - The status of the tasks to filter.
 * @property {UpdateTaskStatus} updateTaskStatus  - Function for updating the status of a task.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom hook for filtering tasks by status.
 *
 * @param {Status} status - The status of the tasks to filter.
 * @returns {Tasks} - The filtered tasks.
 */
const useTasksByStatus = status => {
  const { tasks, updateTaskStatus } = useTasksConsumer();
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const tasksByStatus = tasks.filter(task => task.status === status);
    setFilteredTasks(tasksByStatus);
  }, [tasks, status]);

  return { tasks: filteredTasks, updateTaskStatus };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTasksByStatus;
