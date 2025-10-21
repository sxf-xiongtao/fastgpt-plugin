import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'DuckDuckGo 网络搜索',
    en: 'DuckDuckGo web search'
  },
  description: {
    'zh-CN': '使用 DuckDuckGo 进行网络搜索',
    en: 'Performs web search using DuckDuckGo.'
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
            label: '检索结果'
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
            label: 'Search result'
          }
        ]
      }
    ]
  }
});
