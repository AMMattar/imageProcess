"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const missingRoutes_middleware_1 = __importDefault(require("./middleware/missingRoutes.middleware"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, this is the main api, for the project image process for udacity nanodegree');
});
app.use('/api', routes_1.default);
app.use(missingRoutes_middleware_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
