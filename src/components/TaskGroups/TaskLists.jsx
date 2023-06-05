/**
 * @file Contains `TaskList` React component.
 * @module TaskItem
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// » IMPORT HOOKS
import useTaskLists from '../../hooks/useTaskLists';

// » IMPORT COMPONENTS
import EmptyItem from './EmptyItem';
import TaskItem from './TaskItem';

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

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskItem` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {Tasks} props.tasks -  The task object.
 * @returns {JSX.Element} The rendered component.
 */
const TaskLists = ({ done, title }) => {
  const { tasks, handleDragStart, handleDragOver, handleDrop } = useTaskLists(done);

  return (
    <article className="task-group">
      <h3 className="task-group__title">{title}</h3>
      <ul className="tasks-list">
        {tasks.length === 0 ? (
          <EmptyItem onDrop={handleDrop} />
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))
        )}
      </ul>
    </article>
  );
};

TaskLists.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskLists;
