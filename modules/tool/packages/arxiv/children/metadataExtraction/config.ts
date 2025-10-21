import { defineTool } from '@tool/type';
import {
  FlowNodeInputTypeEnum,
  FlowNodeOutputTypeEnum,
  WorkflowIOValueTypeEnum
} from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.search,
  name: {
    'zh-CN': 'ArXiv 元数据提取',
    en: 'arXiv metadata extraction'
  },
  description: {
    'zh-CN': '通过 ArXiv ID 提取论文完整元数据，包括标题、作者、分类、PDF下载链接等详细信息',
    en: 'Extracts complete paper metadata based on arXiv ID, including title, author, category, and PDF download link.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'arxivId',
            label: 'ArXiv ID',
            description: '要提取元数据的论文 ArXiv ID',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription:
              '要提取元数据的论文 ArXiv ID，例如: "2301.00001", "arXiv:2301.00001", "1706.03762" 等'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'metadata',
            label: '论文元数据',
            description:
              '提取的论文完整元数据，包含标题、作者、摘要、分类、版本、DOI、PDF下载链接等详细信息，如果未找到则为空'
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
            key: 'arxivId',
            label: 'ArXiv ID',
            description: 'arXiv ID of the paper for metadata extraction',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription:
              'arXiv ID of the paper for metadata extraction. Example: "2301.00001", "arXiv:2301.00001", "1706.03762", etc.'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'metadata',
            label: 'Paper metadata',
            description:
              'Complete extracted paper metadata, including title, author, abstract, category, version, DOI, and PDF download link. Returns null if no metadata is extracted.'
          }
        ]
      }
    ]
  }
});
