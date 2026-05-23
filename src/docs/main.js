
// Page Components
import "./spa.enso.js";
import "../components/treeview";

import { pages } from './pages/manifest.js';


const treeView = document.querySelector('enso-tree-view');
treeView.items = pages;

