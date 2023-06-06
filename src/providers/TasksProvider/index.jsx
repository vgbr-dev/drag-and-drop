/**
 * @file Provides tasks context and functions for managing its state.
 * @module TasksProvider
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import { useReducer, useMemo, useCallback } from 'react';

// » IMPORT ASSETS
import taskSeeds from '../../seeds/taskSeeds';

// » IMPORT CONTEXT
import TasksContext from '../../context/TasksContext';

// » IMPORT MODULES
import * as actions from './actions';
import reducer from './reducer';

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
 * Options for creating a new task.
 *
 * @typedef  {object}     CreateTaskOptions
 * @property {string}     title             - The title of the new task.
 * @property {string}     category          - The category of the new task.
 * @property {Importance} importance        - The importance level of the new task.
 */

/**
 * Function for creating a new task.
 *
 * @typedef {(task: CreateTaskOptions) => void} CreateTask
 */

/**
 * Function for deleting a task.
 *
 * @typedef {(taskId: string) => void} DeleteTask
 */

/**
 * Function for updating a task.
 *
 * @typedef {(taskId: string, updatedTask: Task) => void} UpdateTask
 */

/**
 * Function for selecting a task.
 *
 * @typedef {(taskId: string) => void} SelectTask
 */

/**
 * Function for deselecting a task.
 *
 * @typedef {() => void} DeselectTask
 */

/**
 * Function for updating the done status of a task.
 *
 * @typedef {(taskId: string, targetDone: boolean) => void} UpdateTaskDone
 */

/**
 * The state of the `TasksProvider`.
 *
 * @typedef  {object}     State
 * @property {Tasks}      tasks        - The array of tasks.
 * @property {Tasks|null} selectedTask - The selected task or null if none is selected.
 */

/**
 * The context value provided by TasksProvider.
 *
 * @typedef  {object}           TasksContextValue
 * @property {Tasks}            tasks             - The array of tasks.
 * @property {Task|null}        selectedTask      - The selected task or null if none is selected.
 * @property {CreateTask}       createTask        - Function for creating a new task.
 * @property {DeleteTask}       deleteTask        - Function for deleting a task.
 * @property {UpdateTask}       updateTask        - Function for updating a task.
 * @property {SelectTask}       selectTask        - Function for selecting a task.
 * @property {DeselectTask}     deselectTask      - Function for deselecting a task.
 * @property {UpdateTaskDone}   updateTaskDone    - Function for updating the done status of a task.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The initial state for the task provider.
 *
 * @type {State}
 */
const initialState = {
  tasks: taskSeeds,
  selectedTask: null,
};

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Generates a unique ID.
 *
 * @private
 * @returns {string} The unique ID.
 * @example const id = createUID()
 */
const createTaskID = () => `${Date.now().toString(36)}-${Math.random().toString(36).substr(2)}`;

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Provider component for tasks context.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render.
 * @returns {JSX.Element} The rendered component.
 */
const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Adds a new task.
   *
   * @param {CreateTaskOptions} options - The task options.
   * @returns {void}
   */
  const createTask = useCallback(({ title, category, importance }) => {
    const task = {
      id: createTaskID(),
      title,
      category,
      importance,
      done: false,
    };
    dispatch(actions.CREATE_TASK(task));
  }, []);

  /**
   * Deletes a task by ID.
   *
   * @param {string} taskId - The ID of the task to delete.
   * @returns {void}
   */
  const deleteTask = useCallback(taskId => {
    dispatch(actions.DELETE_TASK(taskId));
  }, []);

  /**
   * Updates a task by ID.
   *
   * @param {string} taskId - The ID of the task to update.
   * @param {Task} updatedTask - The properties to update in the task.
   * @returns {void}
   */
  const updateTask = useCallback((taskId, updatedTask) => {
    dispatch(actions.UPDATE_TASK(taskId, updatedTask));
  }, []);

  /**
   * Selects a task by ID.
   *
   * @param {string} taskId - The ID of the task to select.
   * @returns {void}
   */
  const selectTask = useCallback(
    taskId => {
      const selectedTask = state.tasks.find(task => task.id === taskId);
      dispatch(actions.SELECT_TASK(selectedTask));
    },
    [state.tasks],
  );

  /**
   * Deselects the currently selected task.
   *
   * @returns {void}
   */
  const deselectTask = useCallback(() => {
    dispatch(actions.DESELECT_TASK());
  }, []);

  /**
   * Updates the done status of a task.
   *
   * @param {string} taskId - The ID of the task to update.
   * @param {boolean} doneTarget - The new done status of the task.
   * @returns {void}
   */
  const updateTaskDone = useCallback(
    (taskId, doneTarget) => {
      const foundTask = state.tasks.find(task => task.id === taskId);

      if (foundTask && foundTask.done !== doneTarget) {
        dispatch(actions.UPDATE_TASK_DONE(taskId, doneTarget));
      }
    },
    [state.tasks],
  );

  const value = useMemo(
    () => ({
      tasks: state.tasks,
      selectedTask: state.selectedTask,
      createTask,
      deleteTask,
      updateTask,
      selectTask,
      deselectTask,
      updateTaskDone,
    }),
    [
      state.tasks,
      state.selectedTask,
      createTask,
      deleteTask,
      updateTask,
      selectTask,
      deselectTask,
      updateTaskDone,
    ],
  );

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TasksProvider;
