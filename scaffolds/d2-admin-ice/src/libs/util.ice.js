const util = {}

/**
 * @description 路由配置扁平化
 * @param {Array} config 层级路由设置
 */
util.recursiveRouterConfig = function recursiveRouterConfig (config = []) {
  /**
   * path -> name
   * @param {String} path path
   */
  function path2name (path = '') {
    return path.split('/').filter(e => e).join('-')
  };

  /**
  * routeItem
  * @param {Array} con config
  */
  function routeItem (config) {
    return {
      ...config,
      name: config.name || path2name(config.path),
      // meta 设置和默认值合并
      meta: Object.assign({
        auth: true,
        title: path2name(config.path)
      }, config.meta)
    }
  }

  /**
  * recursive
  * @param {Array} con config
  */
  function recursive (con) {
    const routerMap = con.map(item => {
      let route = routeItem(item)

      if (item.children) {
        const newChildren = item.children.map(child => {
          return routeItem(child)
        })
        route.children = newChildren
      }

      return route
    })

    return routerMap
  }

  return recursive(config)
}

/**
 * @description 转换菜单数据
 * @param {Array} arr menu config
 */
util.recursiveMenuConfig = function recursiveMenuConfig (arr) {
  const res = []
  /**
   * 转换每个菜单对象上的 name 为 title
   * @param {Object} obj menu
   */
  function convert (obj) {
    const {
      name, path, icon, children
    } = obj
    return {
      title: name,
      icon,
      path,
      ...children ? { children: children.map(convert) } : {}
    }
  }
  arr.forEach((menu) => {
    res.push(convert(menu))
  })
  return res
}

export default util
