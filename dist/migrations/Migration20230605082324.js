"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230605082324 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230605082324 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('alter table "post" alter column "created_at" type timestamptz(0) using ("created_at"::timestamptz(0));');
            this.addSql('alter table "post" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
            this.addSql('alter table "post" alter column "title" type text using ("title"::text);');
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('alter table "post" alter column "created_at" type varchar(255) using ("created_at"::varchar(255));');
            this.addSql('alter table "post" alter column "updated_at" type varchar(255) using ("updated_at"::varchar(255));');
            this.addSql('alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));');
        });
    }
}
exports.Migration20230605082324 = Migration20230605082324;
//# sourceMappingURL=Migration20230605082324.js.map