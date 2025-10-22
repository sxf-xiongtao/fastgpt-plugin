import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  name: {
    'zh-CN': '模版工具',
    en: 'Template tool'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': '描述',
    en: 'description'
  },
  toolDescription: {
    'zh-CN': 'AI 使用的工具描述，如果未提供则回退到英文描述',
    en: 'tool description for ai to use, fallback to English description if not provided'
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'apiKey',
        label: 'API Key',
        description: '可以在 xxx 获取',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'apiKey',
        label: 'API Key',
        description: 'You can get it from xxx',
        required: true,
        inputType: 'secret'
      }
    ]
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: '默认版本',
        inputs: [
          {
            key: 'formatStr',
            label: '格式化字符串',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'time',
            label: '时间',
            description: '当前时间'
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
            key: 'formatStr',
            label: 'Format string',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'time',
            label: 'Time',
            description: 'Current time'
          }
        ]
      }
    ]
  }
});
