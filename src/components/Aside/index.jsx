/**
 * @file Contains `Aside` React component.
 * @module Aside
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import TaskForm from '../TaskForm';
import TaskStats from '../TaskStats';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Aside` component, displays the aside section.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Aside = () => (
  <aside className="app__aside">
    <TaskStats />
    <TaskForm />
  </aside>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Aside;
