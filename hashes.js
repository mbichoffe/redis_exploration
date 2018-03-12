const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName','Matt', 'lastName', 'Serna');
    redis.hmset('user:450', 'address', 600);
    redis.hincrby('user:450', 'address', 100);

    redis.hgetall('user:450', (err, result)=>{
        console.log(result)
    })
}

export default Hashes;