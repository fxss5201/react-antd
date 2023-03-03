// https://github.com/michaelliao/learn-javascript/blob/master/samples/node/web/koa/url2-koa/controller.js
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { port, timeout = 0 } = require("./package.json");

function addControllers(router, dir) {
  const fullpath = path.join(__dirname + '/' + dir);
  listFile(router, fullpath);
}

/**
 * 递归循环深层目录便利
 * @param {Object} router require('koa-router')()
 * @param {String} dirPath path
 */
function listFile(router, dirPath) {
  const arr = fs.readdirSync(dirPath);
  arr.forEach(function (item) {
    const fullpath = path.join(dirPath, item);
    const stats = fs.statSync(fullpath);
    if (stats.isDirectory()) {
      listFile(router, fullpath);
    } else {
      console.log(chalk.blue(`Mock文件: ${item}`));
      const routes = require(fullpath);
      addRoutes(router, routes);
    }
  });
}

function addRoutes(router, routes) {
  for (const route in routes) {
    let routePath = route.toLowerCase();
    let routeMethod = 'get';
    let routeTimeout = timeout
    if (/[\s]+/.test(routePath)) {
      const routeList = routePath.split(' ');
      if (routeList.length === 2) {
        if (/^\d+$/.test(routeList[1])) {
          // 第二个是数字
          routePath = routeList[0];
          routeTimeout = routeList[1];
        } else {
          routeMethod = routeList[0];
          routePath = routeList[1];
        }
      } else if (routeList.length === 3) {
        routeMethod = routeList[0];
        routePath = routeList[1];
        routeTimeout = routeList[2];
      }
    }
    let routeContent = routes[route];
    router[routeMethod](routePath, async (ctx, next) => {
      await next()
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Object.prototype.toString.call(routeContent).slice(8, -1).toLowerCase() !== 'function') {
            ctx.body = routeContent
          } else {
            routeContent(ctx, next)
          }
          resolve()
        }, routeTimeout)
      })
    });
    console.log(chalk.green(`注册路由: ${chalk.yellow(routeMethod.toUpperCase())}`), chalk.blue(`http://localhost:${port}${routePath}`));
  }
}

module.exports = function (dir) {
  const controllers_dir = dir || 'mock';
  const router = require('@koa/router')();
  addControllers(router, controllers_dir);
  return router.routes();
}
