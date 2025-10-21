import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'Jina AI 工具集',
    en: 'Jina AI toolkit'
  },
  courseUrl: 'https://jina.ai/',
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': 'Jina AI 提供的智能搜索和网页内容提取工具集，包含搜索引擎和网页阅读器功能',
    en: 'Provides intelligent search and webpage content crawling, including search engine and web reader features.'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'Jina AI API密钥',
        description: 'Jina AI API密钥，格式：jina_xxxxxxxxxxxxxxxx',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'Jina AI API key',
        description: 'Format: jina_xxxxxxxxxxxxxxxx',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
