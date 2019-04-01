const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Session = require('telegraf/session');
const Stage = require('telegraf/stage');
const WizardScene = require('telegraf/scenes/wizard');
const mongoose = require('mongoose');
const Telegram = require('telegraf/telegram')

mongoose.connect("mongodb+srv://chystota-admin:chystotaadmin@chystota-staff-vibom.mongodb.net/test?retryWrites=true", {
  useNewUrlParser: true
});
const Report = require('./models/report');

const bot = new Telegraf('739546560:AAG4bMkEjw920sRwQ4MSJSjHrreL0bWRvPk');

bot.start((ctx) => {
console.log(ctx.from);
  // ctx.reply('Custom buttons keyboard', Markup
  // .keyboard([ 
  //   [[Markup.callbackButton('Add order', 'add_order')],
  //   [Markup.callbackButton('Show order list', 'show_list')],
  //   [Markup.callbackButton('Send report', 'send_report')]]
  // ])
  // .resize()
  // .extra()
// )
})

bot.action('add_order', (ctx) => {
  console.log('fuck');
});

const report = Report();
// const create = new WizardScene("create",

//   (ctx) => {
//     ctx.reply('Введіть дату');
//     ctx.wizard.next()
//   },

//   (ctx) => {
//     report.date = ctx.message.text;
//     ctx.reply('Введіть список виконаних замовленнь');
//     ctx.wizard.next()
//   },
//   (ctx) => {
//     report.orders = ctx.message.text;
//     ctx.reply('Введіть список працівників');
//     ctx.wizard.next()
//   },
//   (ctx) => {
//     report.cleaners = ctx.message.text;
//     ctx.reply('Введіть побажання/зауваження/витрати');
//     ctx.wizard.next();
//   },
//   (ctx) => {
//     report.feedback = ctx.message.text;
//     const response = report.date + '\n' + report.orders + '\n' + report.cleaners + '\n' + report.feedback;
//     ctx.reply(response);
//     return ctx.scene.leave();
//   }
// );

// const stage = new Stage()
// stage.register(create)

// bot.use(Session());
// bot.use(stage.middleware());
// // bot.start((ctx) => ctx.scene.enter("create"));

bot.launch()
