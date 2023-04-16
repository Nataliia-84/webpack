// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'
import baseElement from './templay/base.hbs'
import {base,list,frameworks, libs} from './data/hbsData.js'
let baseExport =baseElement(base)
console.log(baseExport)
const container=document.querySelector('#root')
container.insertAdjacentHTML('beforeend',baseExport)
import listElements from './templay/list.hbs'
let listExport=listElements(list)
console.log(listExport)
container.insertAdjacentHTML('beforeend',listExport)
import frameworksElements from './templay/frameworks.hbs'
let frameworksExport=frameworksElements(frameworks)
console.log(frameworksExport)
container.insertAdjacentHTML('beforeend',frameworksExport)
import libsElements from './templay/libs.hbs'
let libsExport=libsElements(libs)
console.log(libsExport)
container.insertAdjacentHTML('beforeend',libsExport)