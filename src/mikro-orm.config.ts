import path from "path";
import { __prod__ } from "./constans";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default{
    migrations:{
        path: path.join(__dirname ,'./migrations'),
        glob: '!(*.d).{js,ts}'
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    password: 'david0349',
    user: 'davidlaufer',
    debug: !__prod__,
    allowGlobalContext: true
    
} as Parameters<typeof MikroORM.init>[0]

