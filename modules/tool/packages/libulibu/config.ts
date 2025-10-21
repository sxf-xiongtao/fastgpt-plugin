import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'libulibu 工具集',
    en: 'Libulibu toolkit'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': 'libulibu 工具集',
    en: 'Libulibu toolkit.'
  },
  courseUrl: 'https://www.liblib.art/apis',
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'accessKey',
        label: 'accessKey',
        description: '可以在 https://www.liblib.art/apis 获取',
        required: true,
        inputType: 'secret'
      },
      {
        key: 'secretKey',
        label: 'secretKey',
        description: '可以在 https://www.liblib.art/apis 获取',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'accessKey',
        label: 'accessKey',
        description: 'Obtain it at https://www.liblib.art/apis.',
        required: true,
        inputType: 'secret'
      },
      {
        key: 'secretKey',
        label: 'secretKey',
        description: 'Obtain it at https://www.liblib.art/apis.',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
