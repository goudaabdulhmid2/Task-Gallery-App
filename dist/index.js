"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const app = config_1.default.app;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.use('/', index_route_1.default);
config_1.default.runApp();
