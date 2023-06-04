/**
 * @file Contains `Header` React component.
 * @module Header
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Header` component, displays the header section.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => (
  <header className="app__header app-header">
    <h1 className="app-header__title">Task Manager</h1>
    <h2 className="app-header__subtitle">
      Organize your tasks <span className="app-header__subtitle--accent">efficiently</span>
    </h2>
  </header>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
