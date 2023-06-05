/**
 * @file Contains `TaskStats` React component.
 * @module TaskStats
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT HOOKS
import useTaskStats from '../../hooks/useTaskStats';

// » IMPORT COMPONENTS
import ProgressRing from '../ProgressRing';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TaskStats` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const TaskStats = () => {
  const taskStats = useTaskStats();

  return (
    <section className="task-stats">
      <header className="task-stats__header">
        <h2 className="task-stats__title">Total Task: {taskStats.total}</h2>
        <h5 className="task-stats__subtitle">Completed Tasks: {taskStats.completed}</h5>
        <h5 className="task-stats__subtitle">Not started Tasks: {taskStats.not_started}</h5>
      </header>
      <ProgressRing completed={taskStats.completed} total={taskStats.total} />
    </section>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TaskStats;
