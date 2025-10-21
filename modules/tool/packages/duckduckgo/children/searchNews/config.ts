import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'DuckDuckGo 新闻检索',
    en: 'DuckDuckGo news search'
  },
  description: {
    'zh-CN': '使用 DuckDuckGo 进行新闻检索',
    en: 'Performs news search using DuckDuckGo.'
  },
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
            key: 'query',
            label: 'query',
            description: '检索词',
            required: true,
            toolDescription: '检索词'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'result',
            label: 'result',
            description: ' 检索结果'
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
            key: 'query',
            label: 'query',
            description: 'Search keyword',
            required: true,
            toolDescription: 'Search keyword'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'result',
            label: 'result',
            description: 'Search result'
          }
        ]
      }
    ]
  }
});
