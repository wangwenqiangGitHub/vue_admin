import veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')
// 批量注册规则

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

// 配置多语言的环境
veeValidate.configure({
  generateMessage: localize('zh_CN'),
})

const modules = { yup, ...veeValidate }
export default modules
