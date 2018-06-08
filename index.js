import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import express from 'express';
import fs from 'fs';
import path from 'path';

const indexHTML = fs.readFileSync( path.resolve( __dirname , '../public/index.html' ) , 'utf8' );
const app = new express();
const PORT = process.env.PORT || 3000;

app.get( '**' , ( req ,res ) => {
    const html = renderToString( <App /> );
    const resultHTML = indexHTML.replace( '<!-- APP -->', html );
    res.send( resultHTML );
});

app.listen( PORT , () => {
    console.log( 'Serving on PORT ' + PORT + '...' );
});
