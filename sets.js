const Sets = (redis) => {
    redis.sadd('groceries:dairies', 'Milk', 'Cheese', 'Yogurt');

    redis.sadd('groceries:seafood', 'calamari');

    redis.sadd('groceries:fruits', 'banana', 'cherry');

    redis.smembers('planets');

    redis.smembers('groceries:fruits', (err, result) =>{
        console.log(result);
    });

    redis.spop('groceries:fruits');

    redis.smembers('groceries:fruits', (err, result) =>{
        console.log(result);
    });
}
export default Sets;