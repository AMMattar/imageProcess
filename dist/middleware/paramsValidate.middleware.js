"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const paramsValidate = (req, res, next) => {
    const { picName, h, w } = req.params;
    const reg = new RegExp('^[0-9]*$');
    try {
        !fs_1.default.existsSync(`images/${picName}.jpg`)
            ? res.send('file does not exist, please check the file name')
            : !reg.test(h) || !reg.test(w)
                ? res.send('height and width should be valid numbers')
                : !parseInt(h) || !parseInt(w)
                    ? res.send('height and width should be valid numbers')
                    : parseInt(h) < 0 && parseInt(w) < 0
                        ? res.send('height and width should be valid numbers')
                        : next();
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = paramsValidate;
