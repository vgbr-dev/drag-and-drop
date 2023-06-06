/**
 * @file Contains `actions` for `TasksProvider` component.
 * @module TasksProvider/actions
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The stage of completion for a task.
 *
 * @typedef  {import('.').Status} Status
 */

/**
 * Represents a task with its associated properties such as ID, title, category,
 * importance, and status.
 *
 * @typedef  {import('.').Task} Task
 */

/**
 * Represents an action to create a new task.
 *
 * @typedef  {Object} CreateTaskAction
 * @property {string} type             - The type of the action.
 * @property {Task}   payload          - The payload of the action containing the task data.
 */

/**
 * Represents an action to delete a task.
 *
 * @typedef  {Object} DeleteTaskAction
 * @property {string} type             - The type of the action.
 * @property {string} payload          - The payload of the action containing the ID of the task to delete.
 */

/**
 * Represents an action to update a task.
 *
 * @typedef  {Object} UpdateTaskAction
 * @property {string} type             - The type of the action.
 * @property {Object} payload          - The payload of the action containing the ID of the task to update and the update data.
 */

/**
 * Represents an action to select a task.
 *
 * @typedef  {Object} SelectTaskAction
 * @property {string} type             - The type of the action.
 * @property {Object} payload          - The payload of the action containing the selected task.
 */

/**
 * Represents an action to deselect a task.
 *
 * @typedef  {Object} DeselectTaskAction
 * @property {string} type               - The type of the action.
 * @property {Object} payload            - The payload of the action containing the selected task.
 */

/**
 * Represents an action to update the status of a task.
 *
 * @typedef  {Object} UpdateTaskStatusAction
 * @property {string} type                 - The type of the action.
 * @property {Object} payload              - The payload of the action containing the ID of the task and the target status.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Creates an action to create a new task.
 *
 * @param {Task} task - The task data.
 * @returns {CreateTaskAction} The action to create a new task.
 */
const CREATE_TASK = task => ({
  type: types.CREATE_TASK,
  payload: task,
});

/**
 * Creates an action to delete a task.
 *
 * @param {string} taskId - The ID of the task to delete.
 * @returns {DeleteTaskAction} The action to delete a task.
 */
const DELETE_TASK = taskId => ({
  type: types.DELETE_TASK,
  payload: taskId,
});

/**
 * Creates an action to update a task.
 *
 * @param {string} taskId - The ID of the task to update.
 * @param {Object} updatedTask - The properties to update in the task.
 * @returns {UpdateTaskAction} The action to update a task.
 */
const UPDATE_TASK = (taskId, updatedTask) => ({
  type: types.UPDATE_TASK,
  payload: { taskId, updatedTask },
});

/**
 * Creates an action to select a task.
 *
 * @param {Object} selectedTask - The selected task.
 * @returns {SelectTaskAction} The action to select a task.
 */
const SELECT_TASK = selectedTask => ({
  type: types.SELECT_TASK,
  payload: selectedTask,
});

/**
 * Creates an action to deselect a task.
 *
 * @returns {DeselectTaskAction} The action to deselect a task.
 */
const DESELECT_TASK = () => ({
  type: types.DESELECT_TASK,
  payload: null,
});

/**
 * Creates an action to update the status of a task.
 *
 * @param {string} taskId - The ID of the task to update.
 * @param {Status} statusTarget - The target status of the task.
 * @returns {UpdateTaskStatusAction} The action to update the status of a task.
 */
const UPDATE_TASK_DONE = (taskId, doneTarget) => ({
  type: types.UPDATE_TASK_DONE,
  payload: { taskId, doneTarget },
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { CREATE_TASK };
export { DELETE_TASK };
export { UPDATE_TASK };
export { SELECT_TASK };
export { DESELECT_TASK };
export { UPDATE_TASK_DONE };
