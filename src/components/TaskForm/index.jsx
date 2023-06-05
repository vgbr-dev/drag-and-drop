/**
 * @file Contains `TaskForm` React component.
 * @module TaskForm
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT HOOKS
import useTaskForm from '../../hooks/useTaskForm';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskForm` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const TaskForm = () => {
  const { formData, isUpdating, onChange, onSubmit } = useTaskForm();

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="title" className="form__group">
        <span className="form__label">Title:</span>
        <input
          type="text"
          id="title"
          name="title"
          className="form__input"
          value={formData.title}
          onChange={onChange}
          placeholder="Create sales report"
          title="Write the task title"
          required
        />
      </label>
      <label htmlFor="category" className="form__group">
        <span className="form__label">Categories:</span>
        <input
          type="text"
          id="category"
          name="category"
          className="form__input"
          value={formData.category}
          onChange={onChange}
          placeholder="School"
          title="The task category"
          required
        />
      </label>
      <label htmlFor="importance" className="form__group">
        <span className="form__label">Importance:</span>
        <select
          id="importance"
          name="importance"
          className="form__select"
          value={formData.importance}
          onChange={onChange}
          title="The task importance"
          required
        >
          <option value="">-- Select an option --</option>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </label>
      <button className="form__button" type="submit">
        {isUpdating ? 'Update' : 'Save'}
      </button>
    </form>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskForm;
