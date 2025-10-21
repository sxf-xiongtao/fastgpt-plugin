import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  SystemInputKeyEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'Kolors画图',
    en: 'Kolors AI'
  },
  description: {
    'zh-CN': '采用硅基流动提供的Kwai-Kolors/Kolors 模型进行绘图',
    en: 'Generates images using the Kwai-Kolors/Kolors model provided by SiliconFlow.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'prompt',
            label: '绘图提示词',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            valueType: WorkflowIOValueTypeEnum.string,
            toolDescription: '绘图提示词'
          },
          {
            key: 'image_size',
            label: '绘图尺寸',
            description: '绘图尺寸，支持 512x512, 1024x1024, 2048x2048',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.select, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: '1024x1024',
            list: [
              { label: '512x512', value: '512x512' },
              { label: '768x1024', value: '768x1024' },
              { label: '720x1440', value: '720x1440' },
              { label: '720x1280', value: '720x1280' },
              { label: '960x1280', value: '960x1280' },
              { label: '1024x1024', value: '1024x1024' },
              { label: '2048x2048', value: '2048x2048' }
            ]
          },
          {
            key: 'batch_size',
            label: '输出图片数量',
            description: '生成的图片数量，范围为 1-4',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 1
          },
          {
            key: 'num_inference_steps',
            label: '推理步数',
            description: '推理步数，范围为 1-100',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 20
          },
          {
            key: 'guidance_scale',
            label: '引导尺度',
            description:
              '控制生成图像与提示词的匹配程度。值越高，生成图像越倾向于严格匹配文本提示。值越低，生成图像越具有创造性和多样性，可能包含更多意想不到的元素。',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 7.5
          },
          {
            key: 'negative_prompt',
            label: '负面提示词',
            description: '用于排除不希望出现在生成图像中的元素',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string,
            toolDescription: '负面提示词'
          },
          {
            key: 'seed',
            label: '随机种子',
            description: '用于控制生成图像的随机性。相同的种子将产生相同的图像。范围为 0-9999999999',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number
          },
          {
            key: 'image',
            label: '参考图',
            description:
              '需要上传的图片应转换为 base64 格式，如 "data:image/png;base64, XXX"。例如："data:image/png;base64, XXX"',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],

        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'images',
            label: '生成的图片',
            description: '生成的图片列表'
          },
          {
            valueType: WorkflowIOValueTypeEnum.number,
            key: 'timings',
            label: '推理时间',
            description: '推理过程的时间信息'
          },
          {
            valueType: WorkflowIOValueTypeEnum.number,
            key: 'seed',
            label: '随机种子',
            description: '用于控制生成图像的随机性'
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
            key: 'prompt',
            label: 'Prompt',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.reference, FlowNodeInputTypeEnum.input],
            valueType: WorkflowIOValueTypeEnum.string,
            toolDescription: 'Prompt'
          },
          {
            key: 'image_size',
            label: 'Image size',
            description: 'Supported size: 512 * 512, 1024 * 1024, 2048 * 2048',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.select, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            defaultValue: '1024x1024',
            list: [
              { label: '512x512', value: '512x512' },
              { label: '768x1024', value: '768x1024' },
              { label: '720x1440', value: '720x1440' },
              { label: '720x1280', value: '720x1280' },
              { label: '960x1280', value: '960x1280' },
              { label: '1024x1024', value: '1024x1024' },
              { label: '2048x2048', value: '2048x2048' }
            ]
          },
          {
            key: 'batch_size',
            label: 'Output images',
            description: 'Number of generated images. Range: 1-4',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 1
          },
          {
            key: 'num_inference_steps',
            label: 'Inference steps',
            description: 'Range: 1-100',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 20
          },
          {
            key: 'guidance_scale',
            label: 'Guidance scale',
            description:
              'Controls how closely the generated image follows the prompt. A higher value makes the image adhere to the prompt. A lower value allows for greater creativity and unexpected content.',
            required: true,
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number,
            defaultValue: 7.5
          },
          {
            key: 'negative_prompt',
            label: 'Negative prompt',
            description: 'Describes the undesired context in the generated image.',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string,
            toolDescription: 'Negative prompt'
          },
          {
            key: 'seed',
            label: 'Seed',
            description: 'Controls randomness in image generation. The same seed will generate the same image. Range: 0-9999999999',
            renderTypeList: [FlowNodeInputTypeEnum.numberInput, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.number
          },
          {
            key: 'image',
            label: 'Reference image',
            description:
              'The image to be uploaded should be converted into base64 format. Example: data:image/png;base64, XXX',
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            valueType: WorkflowIOValueTypeEnum.string
          }
        ],

        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.arrayString,
            key: 'images',
            label: 'Generated image list',
            description: 'Generated image list'
          },
          {
            valueType: WorkflowIOValueTypeEnum.number,
            key: 'timings',
            label: 'Inference time',
            description: 'Time information about the inference'
          },
          {
            valueType: WorkflowIOValueTypeEnum.number,
            key: 'seed',
            label: 'Seed',
            description: 'Controls randomness in image generation.'
          }
        ]
      }
    ]
  }
});
