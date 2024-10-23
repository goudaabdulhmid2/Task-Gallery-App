"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_service_1 = __importDefault(require("./services/database.service"));
dotenv_1.default.config();
class Config {
    PORT = Number(process.env.PORT) || 3000;
    app = (0, express_1.default)();
    static instance;
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new Config();
        return this.instance;
    }
    listenAsync() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(this.PORT, () => resolve(this.app));
            }
            catch (err) {
                reject(err);
            }
        });
    }
    async runApp() {
        try {
            await this.listenAsync();
            console.log(`Working on http://localhost:${this.PORT}`);
            await database_service_1.default.connect();
            console.log("Database is connected");
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = Config.getInstance();
