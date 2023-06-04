/**
 * @file Contains `useDragAndDrop` custom hook.
 * @module useDragAndDrop
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Contains details about a drag event in the context of drag and drop.
 *
 * @typedef {React.DragEvent<HTMLDivElement>} DragEvent
 */

/**
 * Handles the `DragStart` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragStart
 */

/**
 * Handles the `dragEnter` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragEnter
 */

/**
 * Handles the `dragOver` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragOver
 */

/**
 * Handles the `dragLeave` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragLeave
 */

/**
 * Handles the `dragEnd` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDragEnd
 */

/**
 * Handles the `drop` event.
 *
 * @typedef {(event: DragEvent) => void} HandleDrop
 */

/**
 * A hook for handling drag and drop operations.
 *
 * @typedef  {object}          DragAndDropHook
 * @property {string}          dragEvent       - The current drag event.
 * @property {boolean}         dragging        - Indicates whether an element is being dragged.
 * @property {string}          status          - The current status of the drag operation.
 * @property {string}          data            - The data associated with the dragged element.
 * @property {HandleDragStart} handleDragStart - Handles the `DragStart` event.
 * @property {HandleDragEnter} handleDragEnter - Handles the `dragEnter` event.
 * @property {HandleDragOver}  handleDragOver  - Handles the `dragOver` event.
 * @property {HandleDragLeave} handleDragLeave - Handles the `dragLeave` event.
 * @property {HandleDragEnd}   handleDragEnd   - Handles the `dragEnd` event.
 * @property {HandleDrop}      handleDrop      - Handles the `drop` event.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A custom hook for handling drag and drop operations.
 *
 * @hook
 * @returns {DragAndDropHook} - Object containing the properties and functions for drag and drop.
 */
const useDragAndDrop = () => {
  const [dragEvent, setDragEvent] = useState('idle');
  const [dragging, setDragging] = useState(false);
  const [dropped, setDropped] = useState(false);
  const [status, setStatus] = useState('Drag to start');
  const [data, setData] = useState('uninitialized');

  /**
   * Handles the `DragStart` event.
   *
   * @param {DragEvent} event - The `DragStart` event.
   */
  const handleDragStart = event => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData('text/plain', event.target.id);
    setData(event.dataTransfer.getData('text/plain'));
    setDragEvent('drag-start');
    setDragging(true);
    setStatus('Drag in process');
  };

  /**
   * Handles the `dragEnter` event.
   *
   * @param {DragEvent} event - The `dragEnter` event.
   */
  const handleDragEnter = event => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('drag-over');
    setDragEvent('drag-enter');
  };

  /**
   * Handles the `dragOver` event.
   *
   * @param {DragEvent} event - The `dragOver` event.
   */
  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';
    setDragEvent('drag-over');
    setStatus('Drop available');
  };

  /**
   * Handles the `dragLeave` event.
   *
   * @param {DragEvent} event - The `dragLeave` event.
   */
  const handleDragLeave = event => {
    event.stopPropagation();
    event.target.classList.remove('drag-over');
    setDragEvent('drag-leave');
    setStatus('Drag in process (drop was available)');
  };

  /**
   * Handles the `dragEnd` event.
   *
   * @param {DragEvent} event - The `dragEnd` event.
   */
  const handleDragEnd = event => {
    event.preventDefault();
    event.stopPropagation();
    setData(event.dataTransfer.getData('text/plain') || 'empty');
    setTimeout(() => {
      setDragEvent('drag-end');
      setDragging(false);
      if (!dropped) {
        setStatus('Drag canceled');
      }
    }, 100);
  };

  /**
   * Handles the `drop` event.
   *
   * @param {DragEvent} event - The `drop` event.
   */
  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
    const id = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    event.target.appendChild(draggedElement);
    setDragEvent('drop');
    setStatus('Drop done');
    setDropped(true);
  };

  return {
    dragEvent,
    dragging,
    status,
    data,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDragEnd,
    handleDrop,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useDragAndDrop;
