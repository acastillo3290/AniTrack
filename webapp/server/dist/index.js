"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello DUDE!");
});
app.get("/hi", (req, res) => {
    res.send("HIIIII!!!!!");
});
const port = 8080;
app.listen(port, () => {
    console.log(`now listening on port:${port}`);
});
