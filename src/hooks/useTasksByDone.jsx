/**
 * @file A custom hook for filtering tasks by status.
 * @module useTasksByDone
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
 * Function for updating the done status of a task.
 *
 * @typedef {(taskId: string, targetDone: boolean) => void} UpdateTaskDone
 */

/**
 * An object with the tasks filtered by their done status and a function to change
 * their status.
 *
 * @typedef  {object}         TasksByStatusHook
 * @property {Tasks}          tasks             - The status of the tasks to filter.
 * @property {UpdateTaskDone} updateTaskDone    - Function for updating the done status of a task.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom hook for filtering tasks by done status.
 *
 * @param {Status} status - The status of the tasks to filter.
 * @returns {Tasks} - The filtered tasks.
 */
const useTasksByDone = done => {
  const { tasks, updateTaskDone } = useTasksConsumer();
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const tasksByDone = tasks.filter(task => task.done === done);
    setFilteredTasks(tasksByDone);
  }, [tasks, done]);

  return { tasks: filteredTasks, updateTaskDone };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTasksByDone;
