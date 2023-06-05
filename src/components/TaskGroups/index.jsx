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
    <TaskList done title="Completed Tasks" />
    <TaskList done={false} title="Pending Tasks" />
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskGroups;
