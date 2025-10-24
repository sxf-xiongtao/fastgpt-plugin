import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  SystemInputKeyEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'Google 图片搜索',
    en: 'Google Images'
  },
  description: {
    'zh-CN': '调用 Google 图片搜索',
    en: 'Performs search using Google Images.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'q',
            label: '搜索关键词',
            toolDescription: '搜索关键词',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input]
          },
          {
            key: 'num',
            label: '最大搜索数量',
            valueType: WorkflowIOValueTypeEnum.number,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            value: 20,
            max: 100,
            min: 1
          },
          {
            key: 'time_period',
            label: '搜索日期范围',
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.select],
            defaultValue: 'last_year',
            list: [
              { label: 'Last hour', value: 'last_hour' },
              { label: 'Last day', value: 'last_day' },
              { label: 'Last week', value: 'last_week' },
              { label: 'Last month', value: 'last_month' },
              { label: 'Last year', value: 'last_year' }
            ]
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayObject,
            key: 'result',
            label: '搜索结果',
            description: '搜索结果'
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
            key: 'q',
            label: 'Search keyword',
            toolDescription: 'Search keyword',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input]
          },
          {
            key: 'num',
            label: 'Max returned results',
            valueType: WorkflowIOValueTypeEnum.number,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            value: 20,
            max: 100,
            min: 1
          },
          {
            key: 'time_period',
            label: 'Time range for search',
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.select],
            defaultValue: 'last_year',
            list: [
              { label: 'Last hour', value: 'last_hour' },
              { label: 'Last day', value: 'last_day' },
              { label: 'Last week', value: 'last_week' },
              { label: 'Last month', value: 'last_month' },
              { label: 'Last year', value: 'last_year' }
            ]
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayObject,
            key: 'result',
            label: 'Search results',
            description: 'Search results'
          }
        ]
      }
    ]
  }
});
