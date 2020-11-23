"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fakerRoute_1 = require("./routes/fakerRoute");
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('<div>Hello World!</div>');
});
app.use("/faker", fakerRoute_1.router);
app.listen(30000, () => console.log("listening on port 30000"));
//# sourceMappingURL=server.js.map