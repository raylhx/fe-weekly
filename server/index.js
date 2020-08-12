const consola = require('consola')
const Koa = require('koa')
const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

class Server {
  constructor() {
    this.app = new Koa()
    // todo 需要中间件
  }

  useMiddlewares() {
    // 使用中间件
  }

  async start() {
    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.option.server

    await nuxt.ready()
    // 在开发模式下进行编译
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    this.app.use(nuxt.render) // todo 这里可能会有bug

    this.app.listen(port, host)

    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    })
  }
}
const app = new Server()
app.start()
