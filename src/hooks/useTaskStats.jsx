/**
 * @file A custom hook for managing task statistics.
 * @module useTaskStats
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
 * The statistics of the tasks.
 *
 * @typedef  {object} TaskStats
 * @property {number} not_started       - The number of tasks that have not started.
 * @property {number} in_progress       - The number of tasks that are in progress.
 * @property {number} completed         - The number of tasks that are completed.
 * @property {number} waiting_on_others - The number of tasks that are waiting on others.
 * @property {number} deferred          - The number of tasks that are deferred.
 * @property {number} progress          - The progress percentage of completed tasks.
 * @property {number} total             - The total number of tasks.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Calculates the statistics of the tasks.
 *
 * @param {Tasks} tasks - The array of tasks.
 * @returns {TaskStats} - The task statistics.
 */
const calculateTaskStats = tasks => {
  const statsMap = {
    not_started: 0,
    in_progress: 0,
    completed: 0,
    waiting_on_others: 0,
    deferred: 0,
    progress: 0,
    total: tasks.length,
  };

  const stats = tasks.reduce((acc, { status }) => {
    acc[status] += 1;
    return acc;
  }, statsMap);

  stats.progress = Math.round((stats.completed / stats.total) * 100) || 0;

  return stats;
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom hook for managing the task statistics.
 *
 * @hook
 * @returns {TaskStats} - The task statistics.
 * @example const taskStats = useTaskStats();
 */
const useTaskStats = () => {
  const { tasks } = useTasksConsumer();
  const [taskStats, setTaskStats] = useState(() => ({
    not_started: 0,
    in_progress: 0,
    completed: 0,
    waiting_on_others: 0,
    deferred: 0,
    progress: 0,
    total: tasks.length,
  }));

  useEffect(() => {
    const stats = calculateTaskStats(tasks);
    setTaskStats(stats);
  }, [tasks]);

  return taskStats;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTaskStats;
