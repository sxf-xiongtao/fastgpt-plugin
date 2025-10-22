import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': '样例工具集',
    en: 'Template Tool Set'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': '这是一个样例工具集',
    en: 'This is a sample tool set'
  },
  toolDescription: {
    'zh-CN': '这是一个样例工具集，用于演示如何创建新的工具集',
    en: 'This is a sample tool set for demonstrating how to create new tool sets'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'API Key',
        description: '可以在 xxx 获取',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'API Key',
        description: 'API key can be obtained from xxx',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
