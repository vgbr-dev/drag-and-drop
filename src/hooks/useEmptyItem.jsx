/**
 * @file Contains `useEmptyItem` custom hook.
 * @module useEmptyItem
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Event related to drag and drop html elements.
 *
 * @typedef  {React.DragEvent<HTMLLIElement>} DragEvent
 */

/**
 * The callback function for the drop event.
 *
 * @typedef  {(event: DropEvent, targetId: string) => void} OnDrop
 */

/**
 * Handles the drag start event in the component.
 *
 * @typedef  {(event: DropEvent) => void} HandleDragStart
 */

/**
 * Handles the drag over event in the component.
 *
 * @typedef  {(event: DropEvent) => void} HandleDragOver
 */

/**
 * Handles the drag leave event in the component.
 *
 * @typedef  {(event: DropEvent) => void} HandleDragLeave
 */

/**
 * Handles the drop event in the component.
 *
 * @typedef  {(event: DropEvent) => void} HandleDrop
 */

/**
 * An object with The state and functions for managing of component.
 *
 * @typedef  {object}          EmptyItemHook
 * @property {boolean}         isDraggingOver  - The number of tasks that have not started.
 * @property {HandleDragStart} handleDragStart - Handles the drag start event in the component.
 * @property {HandleDragOver}  handleDragOver  - Handles the drag over event in the component.
 * @property {HandleDragLeave} handleDragLeave - Handles the drag leave event in the component.
 * @property {HandleDrop}      handleDrop      - Handles the drop event in the component.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useEmptyItem` custom hook for managing the state of the `EmptyItem`
 * component.
 *
 * @hook
 * @param {OnDrop} onDrop - The callback function to handle the drop event.
 * @returns {EmptyItemHook} An object with The state and functions for managing of component.
 * @example const { isDraggingOver, handleDragStart, handleDragOver } = useEmptyItem(onDrop);
 */
const useEmptyItem = onDrop => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  /**
   * Handles the drag start event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragStart = event => {
    event.preventDefault();
  };

  /**
   * Handles the drag over event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setIsDraggingOver(true);
  };

  /**
   * Handles the drag leave event in the component.
   *
   * @param {DragEvent} event - The drag event.
   */
  const handleDragLeave = event => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  /**
   * Handles the drop event in the component.
   *
   * @param {DragEvent} event - The drop event.
   */
  const handleDrop = event => {
    onDrop(event, null);
    setIsDraggingOver(false);
  };

  return {
    isDraggingOver,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useEmptyItem;
