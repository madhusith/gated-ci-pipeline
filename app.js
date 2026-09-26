const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "CI Pipeline Working",
    });
});

app.get("/health", (req, res) => {
    res.status(200).send("ok");
});

module.exports = app;