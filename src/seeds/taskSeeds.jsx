/**
 * @fileoverview Containing an array of test tasks.
 * @module TaskSeeds
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The level of importance for a task.
 *
 * @typedef {"low"|"normal"|"high"} Importance
 */

/**
 * The stage of completion for a task.
 *
 * @typedef {"not_started"|"in_progress"|"completed"|"waiting_on_others"|"deferred"} Status
 */

/**
 * Represents a task with its associated properties such as ID, title, category,
 * importance, and status.
 *
 * @typedef {Object}      Task
 * @property {string}     id         - The ID of the task.
 * @property {string}     title      - The title of the task.
 * @property {string}     category   - The category of the task.
 * @property {Importance} importance - The importance level of the task.
 * @property {Status}     status     - The status of the task.
 */

/**
 * Defines a collection of tasks with their associated properties.
 *
 * @typedef {Array<Task>} Tasks
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Array of tasks.
 *
 * @type {Tasks}
 */
const taskSeeds = [
  {
    id: 'li4zendg-39zwc425chr-z1otbr9c0g',
    title: 'Llamar al médico',
    category: 'Salud',
    importance: 'high',
    status: 'completed',
  },
  {
    id: 'li4zenlu-6v1roxtbhw3-ip9ulpxqkxm',
    title: 'Hacer ejercicio',
    category: 'Salud',
    importance: 'normal',
    status: 'not_started',
  },
  {
    id: 'li4zeo2o-xxhpwcp2ku9-2jw6grp49wh',
    title: 'Lavar el auto',
    category: 'Hogar',
    importance: 'low',
    status: 'completed',
  },
  {
    id: 'li4zemwn-z6i0i65in5-pdyai9899d',
    title: 'Comprar comestibles',
    category: 'Hogar',
    importance: 'high',
    status: 'not_started',
  },
  {
    id: 'li4zen52-tvj89co7a3-jngywxlkka',
    title: 'Reunión de equipo',
    category: 'Trabajo',
    importance: 'normal',
    status: 'not_started',
  },
  {
    id: 'li4zep09-umyv05zm0dd-yfhh2ucbat7',
    title: 'Enviar el informe',
    category: 'Trabajo',
    importance: 'high',
    status: 'completed',
  },
  {
    id: 'li4zeob2-jpua2y5acx8-xb5sxr92t8q',
    title: 'Retirar efectivo',
    category: 'Finanzas',
    importance: 'high',
    status: 'not_started',
  },
  {
    id: 'li4zenua-ob4dly12hvl-c79nl8knv8m',
    title: 'Pagar facturas',
    category: 'Finanzas',
    importance: 'high',
    status: 'completed',
  },
  {
    id: 'li4zeq6g-6zgloefkjkv-8r0arckad7e',
    title: 'Leer un libro',
    category: 'Entretenimiento',
    importance: 'normal',
    status: 'completed',
  },
  {
    id: 'li4zes9x-bdf8m3liyzi-atsvp8il8q7',
    title: 'Pasear por el parque',
    category: 'Entretenimiento',
    importance: 'low',
    status: 'not_started',
  },
];

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default taskSeeds;
