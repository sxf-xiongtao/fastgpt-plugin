import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'Firecrawl',
    en: 'Firecrawl'
  },
  icon: '',
  type: ToolTypeEnum.search,
  description: {
    'zh-CN': '使用从任何网站抓取的干净数据为您的AI应用程序提供动力。',
    en: 'Empowers your AI apps with clean data crawled from any website.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiUrl',
        label: 'Firecrawl API URL',
        description: 'Firecrawl 的 API 地址，如果使用官方的服务，这里可以留空。',
        required: false,
        inputType: 'input'
      },
      {
        key: 'apiKey',
        label: 'Firecrawl API Key',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiUrl',
        label: 'Firecrawl API URL',
        description: 'API address of Firecrawl, which is not required if the official service is used.',
        required: false,
        inputType: 'input'
      },
      {
        key: 'apiKey',
        label: 'Firecrawl API Key',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
