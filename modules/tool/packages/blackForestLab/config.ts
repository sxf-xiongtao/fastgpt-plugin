import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'Flux 绘图',
    en: 'Flux'
  },
  courseUrl: 'https://www.flux.ai',
  type: ToolTypeEnum.multimodal,
  description: {
    'zh-CN': 'Flux官方绘图模型工具集',
    en: 'An official Flux toolkit.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'API Key',
        description: '可以在 https://api.bfl.ai/ 获取 API Key',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'API Key',
        description: 'API key can be obtained at https://api.bfl.ai/.',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
