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
 * The stage of completion for a task.
 *
 * @typedef {"not_started"|"in_progress"|"completed"|"waiting_on_others"|"deferred"} Status
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskItem` component.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {Status} props.status -  The task object.
 * @param {string} props.title -  The title of the task group.
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
