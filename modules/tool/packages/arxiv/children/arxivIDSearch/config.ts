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
    'zh-CN': 'ArXiv ID 论文检索',
    en: 'arXiv ID-based paper search'
  },
  description: {
    'zh-CN': '通过 ArXiv ID 精确查找特定论文的详细信息',
    en: 'Searches details of a specific paper based on its arXiv ID.'
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
            description: '要查找的论文 ArXiv ID',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription:
              '要查找的论文 ArXiv ID，例如: "2301.00001", "arXiv:2301.00001", "cs-LG/0001001" 等'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'paper',
            label: '论文信息',
            description: '查找到的论文详细信息，包含标题、作者、摘要、链接等，如果未找到则为空'
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
            description: 'arXiv ID of the paper to retrieve',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription:
              'arXiv ID of the paper to retrieve. Example: "2301.00001", "arXiv:2301.00001", "cs-LG/0001001" etc.'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'paper',
            label: 'Paper details',
            description: 'Retrieved paper details, including title, author, abstract, and link. Returns null if no paper is found.'
          }
        ]
      }
    ]
  }
});
