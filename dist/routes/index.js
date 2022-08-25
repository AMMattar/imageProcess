"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProces_controller_1 = __importDefault(require("../controller/imageProces.controller"));
const paramsValidate_middleware_1 = __importDefault(require("../middleware/paramsValidate.middleware"));
const routers = express_1.default.Router();
routers.get('/images/:picName/:h/:w', paramsValidate_middleware_1.default, imageProces_controller_1.default, (req, res) => {
    res.send('this is now working');
});
exports.default = routers;
