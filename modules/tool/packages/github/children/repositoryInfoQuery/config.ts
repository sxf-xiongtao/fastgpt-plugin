import { defineTool } from '@tool/type';
import { FlowNodeInputTypeEnum, WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'GitHub 仓库信息查询',
    en: 'GitHub repository info search'
  },
  description: {
    'zh-CN':
      '查询任意公开仓库的基本信息（star数、fork数、描述、语言等）、README内容和license信息。可选GitHub Token以提升速率或访问私有仓库。',
    en: 'Retrieves basic information (such as stars, forks, description, and language), README file content, and license information from any public GitHub repository. You can use a GitHub token to enhance API rate limit or access a private repository.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'owner',
            label: '仓库拥有者',
            description: 'GitHub 仓库的拥有者用户名，如 facebook',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: 'GitHub 仓库的拥有者用户名, 如 facebook'
          },
          {
            key: 'repo',
            label: '仓库名',
            description: 'GitHub 仓库名，如 react',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: 'GitHub 仓库名，如 react'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'info',
            label: '仓库基本信息',
            description: '包含star数、fork数、描述、语言、topics等'
          },
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'readme',
            label: 'README内容',
            description: '仓库README的markdown原文内容'
          },
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'license',
            label: 'License信息',
            description: '仓库的license信息，如MIT、Apache-2.0等'
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
            key: 'owner',
            label: 'Repository owner',
            description: 'Username of the GitHub repository owner. Example: facebook',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: 'Username of the GitHub repository owner. Example: facebook'
          },
          {
            key: 'repo',
            label: 'Repository name',
            description: 'GitHub repository name. Example: react',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: 'GitHub repository name. Example: react'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'info',
            label: 'Repository basics',
            description: 'Includes stars, forks, description, language, topics, etc.'
          },
          {
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'readme',
            label: 'README file content',
            description: 'The original Markdown content of the README file from the repository'
          },
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'license',
            label: 'License',
            description: 'License information of the repository. Example: MIT, Apache-2.0, etc.'
          }
        ]
      }
    ]
  }
});
