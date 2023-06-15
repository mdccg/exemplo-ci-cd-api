"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
const contacts_1 = require("./routes/contacts");
(0, db_1.connectToMongoDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('/contacts', contacts_1.contactsRouter);
app.get('/', (_, res) => res.send('Contact Book API'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on :${port}`));
exports.default = app;
//# sourceMappingURL=index.js.map