
const Binance = require('binance-api-node').default

// Authenticated client, can make signed calls
const client = Binance({
  apiKey: 'pXa6gGVVcD7agqWQJKdFgekezY5ZzjyGoW8hXQ19BqhW2EIyFK1BS9oO6vB74eL2',
  apiSecret: 'RJNetF8kkspCaLuzWV2pqQQyXb6SLxBxhfYxHZFnb8pWNaf7XH5WB3nt9DFvQHpr',
})

// client.time().then(time => console.log(time))

//查询时间t API Endpoints are rate limited by Binance at 20 requests per second
//1200 requests per minute(20 requests/second)
//10 orders per second
//每隔t，判断severtime是否到开盘时间openTime
//在openTime 卖


//启动问题


// function timeInterval() {
//   client.time().then(time => console.log(time))
// }

// /binance.buy(symbol, quantity, price);
// //binance.buy("ETHBTC", 1, 0.0679); buy 1 eth ，价格是0.0679个btc
// //binance.sell("ETHBTC", 1, 0.069); sell 1 the， 价格是0.0679个btc


//0.179s 成交
function all() {
  const intervalObj = setInterval(timeInterval, 50)

  async function timeInterval() {
    let serverTime = await client.time()
    console.log(serverTime)

    if (serverTime >= "1527263600000" ){
      clearInterval(intervalObj);
      console.log(await client.order({
        symbol: 'ETHBTC',
        side: 'SELL',
        type: 'MARKET',
        quantity: 0.1,
      }))
      }
   }
}

all()


// 下面是sell的格式，卖0.1个eth，按照ETH/BTC市场价

// let serverTime
// async function timeInterval() {
//    serverTime = await client.time()
//    console.log(serverTime)
//   if (serverTime >= "1527229300000" ){
//     console.log(await client.order({
//       symbol: 'ETHBTC',
//       side: 'SELL',
//       type: 'MARKET',
//       quantity: 0.1,
//     }))  }
// }
//
//
// setInterval(timeInterval, 50)


console.log('listening:3001')
