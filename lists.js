const Lists = (redis) => {
    redis.rpush('planets', 'Venus', 'Earth', 'Mars', 'Jupiter');

    redis.rpush('planets', 'Neptune');

    redis.lpush('planets', 'Mercury');

    redis.rpop('planets');

    redis.lrange('planets', 0, -1, (err, result) =>{
        console.log(result)
    })
}
export default Lists;