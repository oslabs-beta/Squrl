"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const fakerController_1 = require("../controllers/fakerController");
exports.router = express_1.default.Router();
exports.router.get('/user', (req, res) => {
    res.send("<h1>creating user data....</h1>");
});
exports.router.post('/create', fakerController_1.fakerController.create, (req, res) => {
    res.status(200).json({});
});
//# sourceMappingURL=fakerRoute.js.map