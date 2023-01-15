const config = {
  locale: 'zhCN', // 设置默认语言，可选值 zhCN/enGb
  isShowToggleLang: true, // 是否显示切换语言，默认展示，如果设置为 false，则必须设置locale
  prefixName: '', // 配置添加前缀的名称，未配置则使用 package.json 的 name
  phonePattern: /^1\d{10}$/, // 手机号正则
  verificationPattern: /^\d{6}$/, // 验证码正则
  secretKey: '', // 密码保存本地时的加解密key，未配置则使用 package.json 的 name

  isShowBreadcrumb: true, // 是否展示 面包屑导航
}

export default config;
