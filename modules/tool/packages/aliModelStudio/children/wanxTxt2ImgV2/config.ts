import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': '通义万相文生图v2',
    en: 'Wan text to image V2'
  },
  description: {
    'zh-CN':
      '使用阿里云百炼通义万相模型将文本描述转换为图像。支持多种模型、自定义尺寸、智能提示词改写等功能。',
    en: 'Converts text into images using Wan models provided by the Alibaba Cloud Model Studio platform. Supports multiple models, image size customization, intelligent prompt rewriting, and other features.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'model',
            label: '模型名称',
            description: '选择要使用的通义万相模型',
            renderTypeList: [FlowNodeInputTypeEnum.select],
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: 'wanx2.1-t2i-turbo',
            list: [
              {
                label: 'wanx2.1-t2i-turbo (快速版)',
                value: 'wanx2.1-t2i-turbo'
              },
              {
                label: 'wanx2.1-t2i-plus (精细版)',
                value: 'wanx2.1-t2i-plus'
              },
              {
                label: 'wanx2.0-t2i-turbo (性价比版)',
                value: 'wanx2.0-t2i-turbo'
              }
            ]
          },
          {
            key: 'prompt',
            label: '正向提示词',
            description: '描述期望生成的图像内容，支持中英文，长度不超过800个字符',
            toolDescription: '文本提示词',
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            valueType: WorkflowIOValueTypeEnum.string,
            required: true
          },
          {
            key: 'negative_prompt',
            label: '反向提示词',
            description: '描述不希望在画面中看到的内容，长度不超过500个字符',
            toolDescription: '反向提示词',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          },
          {
            key: 'size',
            label: '图像尺寸',
            description: '设置生成图像的分辨率',
            renderTypeList: [FlowNodeInputTypeEnum.select],
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: '1024*1024',
            list: [
              { label: '512×512', value: '512*512' },
              { label: '512×1024', value: '512*1024' },
              { label: '768×768', value: '768*768' },
              { label: '768×1024', value: '768*1024' },
              { label: '1024×512', value: '1024*512' },
              { label: '1024×768', value: '1024*768' },
              { label: '1024×1024 (默认)', value: '1024*1024' },
              { label: '1280×720', value: '1280*720' },
              { label: '1440×720', value: '1440*720' }
            ]
          },
          {
            key: 'n',
            label: '生成数量',
            description: '生成图片的数量，取值范围为1~4张',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput],
            valueType: WorkflowIOValueTypeEnum.number,
            min: 1,
            max: 4
          },
          {
            key: 'seed',
            label: '随机种子',
            description: '用于控制模型生成内容的随机性，相同种子会生成相似结果',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput],
            valueType: WorkflowIOValueTypeEnum.number,
            min: 0,
            max: 2147483647
          },
          {
            key: 'prompt_extend',
            label: '智能改写',
            description: '是否开启prompt智能改写，开启后会使用大模型对输入prompt进行智能改写',
            renderTypeList: [FlowNodeInputTypeEnum.switch],
            valueType: WorkflowIOValueTypeEnum.boolean
          },
          {
            key: 'watermark',
            label: '添加水印',
            description: '是否添加AI生成水印标识，水印位于图片右下角',
            renderTypeList: [FlowNodeInputTypeEnum.switch],
            valueType: WorkflowIOValueTypeEnum.boolean
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'images',
            label: '生成的图片',
            description: '生成图片的URL数组'
          },
          {
            type: FlowNodeOutputTypeEnum.error,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'error',
            label: '错误信息'
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
            key: 'model',
            label: 'Model',
            description: 'Specifies the Wan model.',
            renderTypeList: [FlowNodeInputTypeEnum.select],
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: 'wanx2.1-t2i-turbo',
            list: [
              {
                label: 'wanx2.1-t2i-turbo',
                value: 'wanx2.1-t2i-turbo'
              },
              {
                label: 'wanx2.1-t2i-plus',
                value: 'wanx2.1-t2i-plus'
              },
              {
                label: 'wanx2.0-t2i-turbo',
                value: 'wanx2.0-t2i-turbo'
              }
            ]
          },
          {
            key: 'prompt',
            label: 'Positive prompt',
            description: 'Describes the desired content for the generated image. Chinese is also supported. Maximum length: 800 characters',
            toolDescription: 'Text prompt',
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            valueType: WorkflowIOValueTypeEnum.string,
            required: true
          },
          {
            key: 'negative_prompt',
            label: 'Negative prompt',
            description: 'Describes the undesired content for the generated image. Maximum length: 500 characters',
            toolDescription: 'Negative prompt',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          },
          {
            key: 'size',
            label: 'Image size',
            description: 'Specifies the resolution for the generated image.',
            renderTypeList: [FlowNodeInputTypeEnum.select],
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: '1024*1024',
            list: [
              { label: '512*512', value: '512*512' },
              { label: '512*1024', value: '512*1024' },
              { label: '768*768', value: '768*768' },
              { label: '768*1024', value: '768*1024' },
              { label: '1024*512', value: '1024*512' },
              { label: '1024*768', value: '1024*768' },
              { label: '1024*1024 (default)', value: '1024*1024' },
              { label: '1280*720', value: '1280*720' },
              { label: '1440*720', value: '1440*720' }
            ]
          },
          {
            key: 'n',
            label: 'Images',
            description: 'Number of images to generate. Range: 1-4',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput],
            valueType: WorkflowIOValueTypeEnum.number,
            min: 1,
            max: 4
          },
          {
            key: 'seed',
            label: 'Seed',
            description: 'Controls content randomness in model generation. Similar results will be produced with the same seeds.',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput],
            valueType: WorkflowIOValueTypeEnum.number,
            min: 0,
            max: 2147483647
          },
          {
            key: 'prompt_extend',
            label: 'Intelligent rewriting',
            description: 'If enabled, the input prompt will be rewritten by the LLM.',
            renderTypeList: [FlowNodeInputTypeEnum.switch],
            valueType: WorkflowIOValueTypeEnum.boolean
          },
          {
            key: 'watermark',
            label: 'Watermark',
            description: 'If enabled, an AI-generated watermark will be displayed in the bottom-right corner of the image.',
            renderTypeList: [FlowNodeInputTypeEnum.switch],
            valueType: WorkflowIOValueTypeEnum.boolean
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'images',
            label: 'Generated image',
            description: 'URL array of the generated images'
          },
          {
            type: FlowNodeOutputTypeEnum.error,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'error',
            label: 'Error details'
          }
        ]
      }
    ]
  }
});
