/**
 * @file Custom hook for managing the state of the `TaskForm` component.
 * @module useTaskForm
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';
import useTasksConsumer from './useTasksConsumer';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The form data for creating or updating a task.
 *
 * @typedef  {object} FormData
 * @property {string} title      - The title of the task.
 * @property {string} category   - The category of the task.
 * @property {string} importance - The importance of the task.
 */

/**
 * The change event for input elements, or select element, Textarea element.
 *
 * @typedef  {React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>} ChangeEvent
 */

/**
 * The event object for form submission.
 *
 * @typedef  {React.FormEvent<HTMLFormElement>} FormEvent
 */

/**
 * Event handler for input changes in the form.
 *
 * @typedef  {(event: ChangeEvent) => void} OnChange
 */

/**
 * Event handler for form submission.
 *
 * @typedef  {(event: FormEvent) => void} OnSubmit
 */

/**
 * The state and functions provided by the `useTaskForm` hook.
 *
 * @typedef  {object}   TaskFormHook
 * @property {FormData} formData     - The form data for creating a task.
 * @property {boolean}  isUpdating   - Indicates if the form is in update mode.
 * @property {OnChange} onChange     - The change event handler for input elements.
 * @property {OnSubmit} onSubmit     - The submit event handler for the form.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useTaskForm` custom hook for managing the state of the `TaskForm`
 * component.
 *
 * @hook
 * @returns {TaskFormHook} The state and functions for managing the state.
 * @example const { formData, isUpdating, onChange, onSubmit } = useTaskForm();
 */
const useTaskForm = () => {
  const { selectedTask, updateTask, createTask, deselectTask } = useTasksConsumer();
  const [isUpdating, setIsUpdating] = useState(!!selectedTask);
  const [formData, setFormData] = useState({
    title: selectedTask ? selectedTask.title : '',
    category: selectedTask ? selectedTask.category : '',
    importance: selectedTask ? selectedTask.importance : '',
  });

  useEffect(() => {
    setIsUpdating(!!selectedTask);
    if (selectedTask) {
      setFormData({
        title: selectedTask.title,
        category: selectedTask.category,
        importance: selectedTask.importance,
      });
    }
  }, [selectedTask]);

  /**
   * Handles the change event of the form input elements.
   *
   * @param {ChangeEvent} event - The change event.
   */
  const onChange = event => {
    const { name, value } = event.target;
    setFormData(previous => ({
      ...previous,
      [name]: value,
    }));
  };

  /**
   * Handles the submit event of the form.
   *
   * @param {FormEvent} event - The submit event.
   */
  const onSubmit = event => {
    event.preventDefault();
    if (selectedTask) {
      updateTask(selectedTask.id, {
        ...selectedTask,
        title: formData.title,
        category: formData.category,
        importance: formData.importance,
      });
      deselectTask();
    } else {
      // Create new task
      createTask({
        title: formData.title,
        category: formData.category,
        importance: formData.importance,
      });
    }
    setFormData({
      title: '',
      category: '',
      importance: '',
    });
  };

  return { formData, isUpdating, onChange, onSubmit };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTaskForm;
