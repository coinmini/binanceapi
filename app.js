
const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const Binance = require('binance-api-node').default


app.keys = ['binance']
app.use(logger())
app.use(session(app))
app.use(bodyParser())


// Authenticated client, can make signed calls
const client = Binance({
  apiKey: 'pXa6gGVVcD7agqWQJKdFgekezY5ZzjyGoW8hXQ19BqhW2EIyFK1BS9oO6vB74eL2',
  apiSecret: 'RJNetF8kkspCaLuzWV2pqQQyXb6SLxBxhfYxHZFnb8pWNaf7XH5WB3nt9DFvQHpr',
})

// client.time().then(time => console.log(time))

//查询时间t API Endpoints are rate limited by Binance at 20 requests per second
//每隔t，判断severtime是否到开盘时间openTime
//在openTime 卖

//代理问题:用vpn/小飞机有没有办法设置/国外空间

//启动问题


// function timeInterval() {
//   client.time().then(time => console.log(time))
// }

// /binance.buy(symbol, quantity, price);
// //binance.buy("ETHBTC", 1, 0.0679); buy 1 eth ，价格是0.0679个btc
// //binance.sell("ETHBTC", 1, 0.069); sell 1 the， 价格是0.0679个btc



//3.389秒才成交

let serverTime
async function timeInterval() {
   serverTime = await client.time()
   console.log(serverTime)
  // if (serverTime >= "1527229300000" ){
  //   console.log(await client.order({
  //     symbol: 'ETHBTC',
  //     side: 'SELL',
  //     type: 'MARKET',
  //     quantity: 0.1,
  //   }))  }
  // if(serverTime >= "1527229750000"){
  //   console.log("sell done")
  // }

}

// https://api.binance.com/api/v3
// 31.13.77.55
// 31.13.86.1
// 69.63.181.12
// 69.63.181.12
//69.63.181.12  中部
//67.228.102.32  Tx
//69.171.240.27  CA


// 下面是sell的格式，卖0.1个eth，按照ETH/BTC市场价

// async function sellCoin(){
//   console.log('i want to sell')
//   console.log(await client.order({
//     symbol: 'ETHBTC',
//     side: 'SELL',
//     type: 'MARKET',
//     quantity: 0.1,
//   }))
// }
//
// sellCoin()

setInterval(timeInterval, 50)



// app.use(async (ctx,next)=> {
//  console.log('enter the async function')

//卖BTC，数量0.01，
 // console.log(await client.order({
 //   symbol: 'BTCUSDT',
 //   side: 'SELL',
 //   type: 'MARKET',
 //   quantity: 0.01,
 // }))

// 0.00196889

 // console.log(await client.order({
 //   symbol: 'ETHBTC',
 //   side: 'SELL',
 //   type: 'MARKET',
 //   quantity: 0.1,
 // }))


 // setInterval(timeInterval, 500)
 // console.log(await client.exchangeInfo())
 // let timeInterval = await client.time()

 // setTimeout(function run() {
 //   console.log(timeInterval)
 //   setTimeout(run, 1500);
 // }, 1500)

// console.log('this is after promise')
//
// ctx.body = 'success sell'
// })

// app.listen(3001)
console.log('listening:3001')
