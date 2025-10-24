import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'GitHub 工具集',
    en: 'GitHub toolkit'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': 'GitHub 工具集',
    en: 'GitHub toolkit.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'token',
        label: 'GitHub token',
        description: '可选，填写后可提升API速率或访问更多信息',
        inputType: 'secret',
        required: false
      }
    ],
    en: [
      {
        key: 'token',
        label: 'GitHub token',
        description: 'Optional. If enabled, the API rate limit will be enhanced, or more information can be accessed.',
        inputType: 'secret',
        required: false
      }
    ]
  }
});
