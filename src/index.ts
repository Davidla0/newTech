import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constans'
// import { Post } from './entities/Post'
import mikroOrmConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig)
    const migrator = orm.getMigrator();
    await migrator.up()

    const app = express()
    app.listen(4000, () => {
        console.log('server listening in port 4000');
    })
}

main().catch(err => {
    console.log(err);
    
})