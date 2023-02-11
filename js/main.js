import header from './header.js';
import footer from './footer.js';
import home from './home.js';
import history from './history.js';
import readers from './readers.js';
import hisnmuslim from './hisnmuslim.js';


const hostname = window.location.origin;

/* HEADER AND FOORER LOAD  */

await header();
await footer();

/* PAGES LOAD  */

await home();
await history();
await readers();
await hisnmuslim();


/* DOM LOAD EVENT */

// const root = document.querySelector(':root');
// const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
// const myVariables = {
//     '--color-font': '#eff6ff'
//   };
//   setVariables(myVariables);