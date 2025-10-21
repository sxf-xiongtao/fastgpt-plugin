import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';
export default defineToolSet({
  name: {
    'zh-CN': '硅基流动',
    en: 'SiliconFlow'
  },
  courseUrl: 'https://cloud.siliconflow.cn/i/TR9Ym0c4',
  type: ToolTypeEnum.multimodal,
  description: {
    'zh-CN': '这是一个硅基流动工具集',
    en: 'A SiliconFlow toolkit.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'authorization',
        label: '接口凭证（不需要 Bearer）',
        description: 'sk-xxxx',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'authorization',
        label: 'API token (Bearer is not required.)',
        description: 'sk-xxxx',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
