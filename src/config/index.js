const pkg = require('../../package.json');

const config = {
  locale: 'zhCN', // 设置默认语言，可选值 zhCN/enGb
  isShowToggleLang: true, // 是否显示切换语言，默认展示，如果设置为 false，则必须设置locale
  prefixName: '', // 配置添加前缀的名称，未配置则使用 package.json 的 name
  phonePattern: /^1\d{10}$/, // 手机号正则
  verificationPattern: /^\d{6}$/, // 验证码正则
  secretKey: '', // 密码保存本地时的加解密key，未配置则使用 package.json 的 name

  isShowBreadcrumb: true, // 是否展示 面包屑导航，可在 route 单个设置覆盖
  isShowTabs: true, // 是否展示 Tabs 导航，可在 route 单个设置覆盖，隐藏之后次 route 也不会在 Tabs 导航中
  // [水印组件](https://ant-design.antgroup.com/components/watermark-cn#watermark)
  // 统一设置为水印组件的 content，支持 Array 和 Object，如果为 Array 则直接设置为水印组件的 content，如果为 Object，仅支持 user 属性数组配置，用于配置用户信息，且自行保证配置的都是 store.getState().userInfo.value 中的 key 值
  watermark: [pkg.name, pkg.author],

  // 主题色配置，放开的话，必须配置，否则主题色有问题
  // theme: {
  //   colorPrimary: '#00b96b'
  // },

  // 没权限时跳转的 path ，默认值为'/403'，'/403' 或者 '/404'
  noAccessPath: '/403',
}

export default config;
