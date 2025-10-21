import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.communication,
  name: {
    'zh-CN': '企业微信 webhook',
    en: 'WeCom webhook'
  },
  description: {
    'zh-CN': '向企业微信机器人发起 webhook 请求。只能内部群使用。',
    en: 'Sends webhook requests to the WeCom bot. Supports only for internal groups.'
  },
  courseUrl: 'https://developer.work.weixin.qq.com/document/path/91770',
  icon: 'plugins/qiwei',
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'webhookUrl',
            label: '企微机器人地址',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          },
          {
            key: 'message',
            label: '发送的消息',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],
        outputs: []
      }
    ],
    en: [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'webhookUrl',
            label: 'WeCom bot address',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          },
          {
            key: 'message',
            label: 'Sent message',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],
        outputs: []
      }
    ]
  }
});
