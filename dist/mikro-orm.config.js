"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constans_1 = require("./constans");
const Post_1 = require("./entities/Post");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        glob: '!(*.d).{js,ts}'
    },
    entities: [Post_1.Post],
    dbName: 'lireddit',
    type: 'postgresql',
    password: 'david0349',
    user: 'davidlaufer',
    debug: !constans_1.__prod__,
    allowGlobalContext: true
};
//# sourceMappingURL=mikro-orm.config.js.map