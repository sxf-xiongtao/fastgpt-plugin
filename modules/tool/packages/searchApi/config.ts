import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'SearchApi 服务',
    en: 'Search API'
  },
  courseUrl: 'https://www.searchapi.io/',
  type: ToolTypeEnum.search,
  description: {
    'zh-CN': 'SearchApi 服务',
    en: 'Search API'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'Search API Key',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'Search API Key',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
