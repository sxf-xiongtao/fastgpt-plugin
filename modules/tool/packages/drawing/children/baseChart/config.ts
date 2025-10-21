import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': '基础图表',
    en: 'Basic chart'
  },
  description: {
    'zh-CN': '根据数据生成图表，可根据chartType生成柱状图，折线图，饼图',
    en: 'Generates a chart based on input data, supporting bar, line, and pie charts.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'title',
            label: 'title',
            description: 'BI图表的标题',
            toolDescription: 'BI图表的标题'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'xAxis',
            label: 'xAxis',
            description: 'x轴数据，例如：["A", "B", "C"]',
            required: true,
            toolDescription: 'x轴数据，例如：["A", "B", "C"]'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'yAxis',
            label: 'yAxis',
            description: 'y轴数据，例如：[1,2,3]',
            required: true,
            toolDescription: 'y轴数据，例如：[1,2,3]'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.select, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'chartType',
            label: 'chartType',
            description: '图表类型：柱状图，折线图，饼图',
            required: true,
            list: [
              {
                label: '折线图',
                value: '折线图'
              },
              {
                label: '柱状图',
                value: '柱状图'
              },
              {
                label: '饼图',
                value: '饼图'
              }
            ],
            toolDescription: '图表类型：柱状图，折线图，饼图'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            description: '可用使用markdown格式展示图片，如：![图片](url)',
            defaultValue: '',
            label: '图表 url',
            key: 'chartUrl'
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
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'title',
            label: 'title',
            description: 'BI chart title',
            toolDescription: 'BI chart title'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'xAxis',
            label: 'xAxis',
            description: 'X-axis data. Example: ["A", "B", "C"]',
            required: true,
            toolDescription: 'X-axis data. Example: ["A", "B", "C"]'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'yAxis',
            label: 'yAxis',
            description: 'Y-axis data. Example: [1, 2, 3]',
            required: true,
            toolDescription: 'Y-axis data. Example: [1, 2, 3]'
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.select, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'chartType',
            label: 'chartType',
            description: 'Chart type: Bar, line, or pie chart',
            required: true,
            list: [
              {
                label: 'Line chart',
                value: '折线图'
              },
              {
                label: 'Bar chart',
                value: '柱状图'
              },
              {
                label: 'Pie chart',
                value: '饼图'
              }
            ],
            toolDescription: 'Chart type: Bar, line, or pie chart'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            description: 'Chart is displayed in Markdown format. Example: ![image](url)',
            defaultValue: '',
            label: 'Chart URL',
            key: 'chartUrl'
          }
        ]
      }
    ]
  }
});
