
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

//50
//0.179s 成交
//0.244s
//0.162
//0.176s

//25
//0.162s

//10
//0.154


function all() {
  const intervalObj = setInterval(timeInterval, 100)

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

      console.log(await client.order({
        symbol: 'ETHBNB',
        side: 'SELL',
        type: 'MARKET',
        quantity: 0.1,
      }))

      }
   }
}

all()

//下面是计算新币上架的历史记录
// async function myTrades() {
//   console.log(await client.tradesHistory({
//      symbol: 'ZENBNB',
//      fromId: '0',
//     }))
//
//   let aggTrades = await client.aggTrades({
//     symbol: 'BTCUSDT',
//     startTime: '1527060600000',
//     endTime: '1527060630000'
//    })
//
//
//
//     for (i=0; i< aggTrades.length; i++) {
//       let aggId = aggTrades[i].aggId
//       let price = aggTrades[i].price
//       let quantity = aggTrades[i].quantity
//       let timestamp = aggTrades[i].timestamp
//
//       console.log(aggId + ',' + timestamp +','+ parseFloat(price)+ ',' +parseFloat(quantity))
//     }

}

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
