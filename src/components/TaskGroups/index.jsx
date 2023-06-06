/**
 * @file Contains `TaskGroups` React component.
 * @module TaskGroups
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import TaskList from './TaskLists';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskGroups` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const TaskGroups = () => (
  <section className="task-groups">
    <TaskList status="completed" title="Completed Tasks" />
    <TaskList status="not_started" title="Pending Tasks" />
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskGroups;
