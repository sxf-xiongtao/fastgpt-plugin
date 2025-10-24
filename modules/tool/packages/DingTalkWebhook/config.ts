import { defineTool } from '@tool/type';
import { FlowNodeInputTypeEnum, WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.communication,
  name: {
    'zh-CN': '钉钉 webhook',
    en: 'DingTalk webhook'
  },
  description: {
    'zh-CN': '向钉钉机器人发起 webhook 请求。',
    en: 'Sends webhook requests to the DingTalk bot.'
  },
  icon: 'plugins/dingding',
  courseUrl: 'https://open.dingtalk.com/document/robots/custom-robot-access',
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'webhookUrl',
            label: '钉钉机器人地址',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            required: true
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'secret',
            label: '加签值',
            description: '钉钉机器人加签值',
            required: true
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'message',
            label: '发送的消息',
            description: '发送的消息',
            required: true,
            toolDescription: '发送的消息'
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
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'webhookUrl',
            label: 'DingTalk bot address',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            required: true
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'secret',
            label: 'Signature value',
            description: 'Signature value of the DingTalk bot',
            required: true
          },
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'message',
            label: 'Sent message',
            description: 'Sent message',
            required: true,
            toolDescription: 'Sent message'
          }
        ],
        outputs: []
      }
    ]
  }
});
