const config = {
  locale: 'zhCN', // 设置默认语言，可选值 zhCN/enGb
  prefixName: '', // 配置添加前缀的名称，未配置则使用 package.json 的 name
  phonePattern: /^1\d{10}$/, // 手机号正则
  verificationPattern: /^\d{6}$/, // 验证码正则
  secretKey: '', // 密码保存本地时的加解密key，未配置则使用 package.json 的 name
}

export default config;
