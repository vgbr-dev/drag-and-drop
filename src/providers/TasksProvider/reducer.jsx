/**
 * @file Contains `reducer` for `TasksProvider` component.
 * @module TasksProvider/reducer
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The state of tasks context.
 *
 * @typedef  {import('.').State} State
 */

/**
 * Represents the actions that can be dispatched to update the state of
 * the tasks.
 *
 * @typedef  {Object} Action
 * @property {string} type    - The type of the action.
 * @property {*}      payload - The payload of the action containing values to update the tasks context state.
 */

// ━━ REDUCER FUNCTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The reducer function for the TasksProvider component.
 *
 * @param {State} state - The current state of the tasks.
 * @param {Action} action - The action object to update the state.
 * @returns {State} The updated state of the tasks.
 */
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case types.DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== payload) };
    case types.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(tasks => {
          if (tasks.id === payload.taskId) {
            return {
              ...tasks,
              ...payload.updatedTask,
            };
          }
          return tasks;
        }),
      };
    case types.SELECT_TASK:
      return { ...state, selectedTask: payload };
    case types.DESELECT_TASK:
      return { ...state, selectedTask: null };
    case types.UPDATE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.taskId && task.status !== payload.statusTarget) {
            return {
              ...task,
              status: payload.statusTarget,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default reducer;
