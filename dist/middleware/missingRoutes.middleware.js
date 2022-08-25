"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missingRoutes = (req, res) => {
    res.send('This route does not exist use /api/images/picture name/height/width to get your results');
};
exports.default = missingRoutes;
