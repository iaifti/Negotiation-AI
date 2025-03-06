const { createClient } = require('redis');

async function testRedis() {
  const client = createClient({
    username: 'default', 
    password: 'DdsNoBhFnKmsooUBYhyoX0ZGnYOPsBbD', 
    socket: {
      host: 'redis-12839.c273.us-east-1-2.ec2.redns.redis-cloud.com',
      port: 12839, 
    },
  });

  try {
    await client.connect();
    console.log('Connected to Redis');

    await client.set('test', 'test2');
    console.log('Key "test" set with value "test2"');

    const value = await client.get('test');
    console.log('Retrieved value for "test":', value);

  } catch (err) {
    console.error('Error in Redis operation:', err);
  } finally {
    await client.quit();
    console.log('Disconnected from Redis');
  }
}

testRedis();




