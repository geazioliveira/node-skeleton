import express from "express";
import consign from "consign";

const app = express();

consign({
    cwd: 'api',
    verbose: true
})
    .include('config/config.js')
    .then('config/datasources.js')
    .then('repositories')
    .then('managers')
    .then('http')
    .then('../boot.js')
    .into(app);