import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': '阿里云百炼',
    en: 'Alibaba Cloud Model Studio'
  },
  courseUrl: 'https://bailian.console.aliyun.com/',
  type: ToolTypeEnum.multimodal,
  description: {
    'zh-CN': '这是一个阿里云百炼工具集，支持调用多种阿里云百炼平台提供的模型服务',
    en: 'A toolkit that enables access to various model services from the Alibaba Cloud Model Studio platform.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'API Key',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'API Key',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
