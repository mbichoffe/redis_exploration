import Redis from 'ioredis';
import Strings from './strings'
//initiate redis server
//const redis = new Redis();
const redis = new Redis({password: 'yasmin'});

Strings(redis);
