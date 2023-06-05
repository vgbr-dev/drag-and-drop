/**
 * @file Contains `types` for `TasksProvider` component.
 * @module TasksProvider/types
 */

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Action to create a task.
 *
 * @type {string}
 */
export const CREATE_TASK = 'CREATE_TASK';

/**
 * Action to delete a task.
 *
 * @type {string}
 */
export const DELETE_TASK = 'DELETE_TASK';

/**
 * Action to update a task.
 *
 * @type {string}
 */
export const UPDATE_TASK = 'UPDATE_TASK';

/**
 * Action to select a task.
 *
 * @type {string}
 */
export const SELECT_TASK = 'SELECT_TASK';

/**
 * Action to update task.done by id.
 *
 * @type {string}
 */
export const UPDATE_TASK_DONE = 'UPDATE_TASK_DONE';
