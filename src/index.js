import "../node_modules/normalize.css";
import "./css/style.css";
import "./css/customStyles.css";
import logo from "./images/logo.png";
import mikeImg from './images/mike.jpeg'
import emanImg from './images/eman.jpeg'

const logoElm = document.getElementById("logo");
logoElm.setAttribute("src", logo);

const mike = document.getElementById('mike')
mike.setAttribute('src',mikeImg)
const eman = document.getElementById('eman')
eman.setAttribute('src',emanImg)