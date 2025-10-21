import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'Doc2X 服务',
    en: 'Doc2x'
  },
  type: ToolTypeEnum.tools,
  courseUrl: 'https://doc2x.noedgeai.com?inviteCode=9EACN2',
  description: {
    'zh-CN': '将传入的图片或PDF文件发送至Doc2X进行解析，返回带LaTeX公式的markdown格式的文本。',
    en: 'Converts images or PDF files into Markdown text with LaTeX formulas.'
  },
  icon: 'plugins/doc2x',
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apikey',
        label: 'apikey',
        description: 'Doc2X的API密钥，可以从Doc2X开放平台获得',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apikey',
        label: 'apikey',
        description: 'Doc2X API key, which can be obtained from the Doc2X open platform',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
