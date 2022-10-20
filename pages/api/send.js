// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function  handler(req, res) {
  
      
      
  const { Telegraf } = require('telegraf');

  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Code Capsules telegram bot.\nI respond to /ethereum. Please try it', {
    })
  })
  
  bot.command('ethereum', ctx => {
    var rate;
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
    .then(response => {
      console.log(response.data)
      rate = response.data.ethereum
      const message = `Hello, today the ethereum price is ${rate.usd}USD`
      bot.telegram.sendMessage(ctx.chat.id, message, {
      })
    })
  })
  

  if (req.body 
  && Object.keys(req.body).length === 0
  && Object.getPrototypeOf(req.body) === Object.prototype) 
  {

    res.status(500).json({message: "internal server error"})

  }
  else
  {
    return res.status(200).json({ 
      name: req.body.name,
      lastName: req.body.lastName,
      email:  req.body.email,
      message: req.body.message,
    })
  }
}
