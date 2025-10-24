import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.tools,
  name: {
    'zh-CN': '网页内容抓取',
    en: 'WebScraper'
  },
  description: {
    'zh-CN': '可获取一个网页链接内容，并以 Markdown 格式输出，仅支持获取静态网站。',
    en: 'Extracts webpage content and outputs it in Markdown format. Supports only static websites.'
  },
  icon: 'core/workflow/template/fetchUrl',
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'url',
            label: 'url',
            description: '需要读取的网页链接',
            required: true,
            toolDescription: '需要读取的网页链接'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'result',
            label: 'result',
            description: '获取的网页内容'
          }
        ]
      }
    ],
    en: [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'url',
            label: 'url',
            description: 'URL of the webpage for crawling',
            required: true,
            toolDescription: 'URL of the webpage for crawling'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'result',
            label: 'result',
            description: 'Crawled webpage content'
          }
        ]
      }
    ]
  }
});
