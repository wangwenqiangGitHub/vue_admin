import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { loadLocaleFromURL, localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'
// loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')

// 配置多语言的环境； 必须放在规则的上边，要不不生效
veeValidate.configure({
  generateMessage: localize('zh_CN', zh_CN),
})

// 批量注册规则
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }
export default modules
