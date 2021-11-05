import { app, BrowserWindow } from 'electron';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app/App';
import { readFileSync } from 'fs';
import * as path from 'path';

const win = new BrowserWindow({
    frame: false,
    transparent: true
});

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);
const htmlString = readFileSync(path.resolve(__dirname, "app/index.html")).toString();
const newDoc = document.implementation.createHTMLDocument(htmlString);
const content = ReactDOMServer.renderToString(<App />);
const root = newDoc.getElementById("react-root");
if (root) root.innerHTML = content;

console.log(newDoc.body);