/**
 * @file Entry point of the React application.
 * @module App
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT PROVIDERS
import TasksProvider from './providers/TasksProvider';

// » IMPORT COMPONENTS
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `App` component, the main component where the entire `react` application
 * is managed.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => (
  <TasksProvider>
    <div className="app">
      <Header />
      <Aside />
      <Main />
    </div>
  </TasksProvider>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default App;
