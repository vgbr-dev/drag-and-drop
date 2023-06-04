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
  <header className="app-header">
    <h1 className="app-header__title">Drag &amp; Drop</h1>
    <h2 className="app-header__subtitle">
      Its life cycle and <span className="app-header__subtitle--accent">events</span>
    </h2>
  </header>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
