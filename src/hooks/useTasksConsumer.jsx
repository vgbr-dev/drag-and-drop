/**
 * @file Provides the custom hook `useTasksConsumer` to consume the `TasksContext`.
 * This hook allows access to the tasks context value.
 *
 * @module useTasksConsumer
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useContext } from 'react';

// » IMPORT CONTEXT
import TasksContext from '../context/TasksContext';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The Tasks context value.
 *
 * @typedef {import('../providers/TasksProvider').TasksContextValue} TasksContextValue
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useTasksConsumer` custom Hook, is a consumer of `TasksContext`.
 *
 * It provides access to the tasks context value and functions for managing
 * its state.
 *
 * @throws Will throw an `Error` if the hook is not used within the `AuthContext` provider
 * @returns {TasksContextValue} The tasks context value.
 */
const useTasksConsumer = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasksConsumer must be within the TasksContext provider');
  }
  return context;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTasksConsumer;
