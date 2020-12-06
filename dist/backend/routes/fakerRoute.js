"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const fakerController_1 = require("../controllers/fakerController");
const path_1 = __importDefault(require("path"));
exports.router = express_1.default.Router();
exports.router.post('/create', fakerController_1.fakerController.create, (req, res) => {
    res.status(200).json({});
});
exports.router.get('/create', (req, res) => {
    console.log("here i am");
    res.status(200).download(path_1.default.resolve(__dirname, "../../../Output.sql"));
});
//# sourceMappingURL=fakerRoute.js.map