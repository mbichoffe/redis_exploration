import Redis from 'ioredis';
import Strings from './strings'
import Hashes from './hashes'
import Lists from './lists'
import Sets from './sets'
import SortedSets from './sortedsets'
//initiate redis server
//const redis = new Redis();
const redis = new Redis({password: 'yasmin'});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);