const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const chalk = require("chalk");
const dayjs = require("dayjs");
const controllers = require("./controller");
const { port } = require("./package.json");

const app = new Koa();

// const logSuccess = () => chalk.green(" ✔ ")
// const logError = () => chalk.red(" ✖ ")
// const logInfo = () => chalk.blue(" ℹ ")
// const logWarning = () => chalk.yellow(" ⚠ ")

app.use(controllers());
app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(
    chalk.blue(" ℹ "),
    chalk.blue(`请求： ${chalk.yellow(ctx.request.method)} ${ctx.request.url}`),
    dayjs().format("YYYY-MM-DD HH:mm:ss")
  );
  await next();
});

app.listen(port);
console.log(chalk.green(`app started at port ${port}:`), chalk.blue(`http://localhost:${port}`));