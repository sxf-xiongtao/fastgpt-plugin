import { defineTool } from '@tool/type';
import { WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.tools,
  name: {
    'zh-CN': '获取当前时间',
    en: 'CurrentTime'
  },
  description: {
    'zh-CN': '获取当前时间',
    en: 'Gets the current time'
  },
  icon: 'core/workflow/template/getTime',
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [],
        outputs: [
          {
            key: 'time',
            valueType: WorkflowIOValueTypeEnum.string,
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
        inputs: [],
        outputs: [
          {
            key: 'time',
            valueType: WorkflowIOValueTypeEnum.string,
            label: 'Time',
            description: 'Current time'
          }
        ]
      }
    ]
  }
});
