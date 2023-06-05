/**
 * @fileoverview Containing an array of test tasks.
 * @module TaskSeeds
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The importance level of a task.
 *
 * @typedef {"low"|"normal"|"high"} Importance
 */

/**
 * Represents a task.
 *
 * @typedef {Object}      Task
 * @property {string}     id         - The ID of the task.
 * @property {string}     title      - The title of the task.
 * @property {string}     category   - The category of the task.
 * @property {Importance} importance - The importance level of the task.
 * @property {boolean}    done       - Indicates whether the task is done or not.
 */

/**
 * An array of tasks.
 *
 * @typedef {Array<Task>} Tasks
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Array of test tasks.
 *
 * @type {Tasks}
 */
const taskSeeds = [
  {
    id: 'li4zemwn-z6i0i65in5-pdyai9899d',
    title: 'Comprar comestibles',
    category: 'Hogar',
    importance: 'high',
    done: false,
  },
  {
    id: 'li4zen52-tvj89co7a3-jngywxlkka',
    title: 'Reunión de equipo',
    category: 'Trabajo',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zendg-39zwc425chr-z1otbr9c0g',
    title: 'Llamar al médico',
    category: 'Salud',
    importance: 'high',
    done: true,
  },
  {
    id: 'li4zenlu-6v1roxtbhw3-ip9ulpxqkxm',
    title: 'Hacer ejercicio',
    category: 'Salud',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zenua-ob4dly12hvl-c79nl8knv8m',
    title: 'Pagar facturas',
    category: 'Finanzas',
    importance: 'high',
    done: true,
  },
  {
    id: 'li4zeo2o-xxhpwcp2ku9-2jw6grp49wh',
    title: 'Lavar el auto',
    category: 'Hogar',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zeob2-jpua2y5acx8-xb5sxr92t8q',
    title: 'Investigar para el proyecto',
    category: 'Estudios',
    importance: 'normal',
    done: true,
  },
  {
    id: 'li4zeojg-vwbamhfpmq-2r8xhvwabrw',
    title: 'Caminar al perro',
    category: 'Mascotas',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zeorw-c4j6mful0tk-d5yl7ybprl9',
    title: 'Preparar la cena',
    category: 'Hogar',
    importance: 'normal',
    done: true,
  },
  {
    id: 'li4zep09-umyv05zm0dd-yfhh2ucbat7',
    title: 'Enviar el informe',
    category: 'Trabajo',
    importance: 'high',
    done: true,
  },
  {
    id: 'li4zep8n-ozgah72gcm-powsyji19vr',
    title: 'Hacer la cama',
    category: 'Hogar',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zephb-ekm8xa9mrni-1cczuyezxsyh',
    title: 'Comprar regalo de cumpleaños',
    category: 'Familia',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zeppp-5o2zkheoe5d-biw2quaf1di',
    title: 'Revisar los emails',
    category: 'Trabajo',
    importance: 'high',
    done: false,
  },
  {
    id: 'li4zepy3-6y23ko4r75v-jqxrs7i1m5k',
    title: 'Sacar la basura',
    category: 'Hogar',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zeq6g-6zgloefkjkv-8r0arckad7e',
    title: 'Leer un libro',
    category: 'Entretenimiento',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zeqev-y874jb4451a-fy7noubovog',
    title: 'Cita con el dentista',
    category: 'Salud',
    importance: 'high',
    done: true,
  },
  {
    id: 'li4zeqn8-ap4zj1i5f06-tk0u3lies0f',
    title: 'Hacer la compra',
    category: 'Hogar',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zeqvl-gk23nqni1pe-zgpdgtm0wwh',
    title: 'Resolver crucigrama',
    category: 'Entretenimiento',
    importance: 'low',
    done: false,
  },
  {
    id: 'li4zer3y-3xq39zngu5k-w71umcnob3s',
    title: 'Enviar tarjeta de cumpleaños',
    category: 'Familia',
    importance: 'normal',
    done: true,
  },
  {
    id: 'li4zercb-mrf5g0hp1i-qfm4ln8qkfk',
    title: 'Revisar redes sociales',
    category: 'Entretenimiento',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zerkq-8o7bdxumcsc-ucs87tlahoi',
    title: 'Actualizar el software',
    category: 'Tecnología',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zert3-vng8rz469hk-l86ir0kr8mk',
    title: 'Hacer una lista de compras',
    category: 'Hogar',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zes1j-e8brhwi102s-j6dv1vg2of',
    title: 'Preparar presentación',
    category: 'Trabajo',
    importance: 'high',
    done: false,
  },
  {
    id: 'li4zes9x-bdf8m3liyzi-atsvp8il8q7',
    title: 'Pasear por el parque',
    category: 'Entretenimiento',
    importance: 'low',
    done: false,
  },
  {
    id: 'li4zesib-h1s222t3t78-qmkwah5ruga',
    title: 'Visitar a los abuelos',
    category: 'Familia',
    importance: 'normal',
    done: true,
  },
  {
    id: 'li4zesqo-vbsbje1ukm8-mm94yxsv10a',
    title: 'Comprobar la seguridad del sitio web',
    category: 'Tecnología',
    importance: 'high',
    done: false,
  },
  {
    id: 'li4zesz1-jd27ia5arb-kekrw9maj38',
    title: 'Hacer una siesta',
    category: 'Salud',
    importance: 'normal',
    done: false,
  },
  {
    id: 'li4zet7e-kp84fct9nq-whqc0bbmif',
    title: 'Limpiar el garaje',
    category: 'Hogar',
    importance: 'low',
    done: true,
  },
  {
    id: 'li4zetft-cncctns0wrn-udwkvemjjvm',
    title: 'Resolver problema de programación',
    category: 'Estudios',
    importance: 'high',
    done: false,
  },
  {
    id: 'li4zetoi-3gspqn0x1u3-o6drjo9qfvp',
    title: 'Ver una película',
    category: 'Entretenimiento',
    importance: 'normal',
    done: false,
  },
];

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default taskSeeds;
