import { defineTool } from '@tool/type';
import { FlowNodeInputTypeEnum, WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';

export default defineTool({
  name: {
    'zh-CN': 'GitHub 用户信息查询',
    en: 'GitHub user info search'
  },
  description: {
    'zh-CN':
      '查询任意 GitHub 用户的公开信息（头像、bio、粉丝数、仓库数等）和公开仓库列表。可选 GitHub Token 以提升速率或访问更多信息。',
    en: 'Retrieves public information such as profile image, bio, followers, and repositories, and public repository list of any GitHub user. You can use a GitHub token to enhance API rate limit or access more information.'
  },
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            key: 'username',
            label: 'GitHub 用户名',
            description: '要查询的 GitHub 用户名，如 octocat',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: '要查询的 GitHub 用户名，如 octocat'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'userInfo',
            label: '用户基本信息',
            description: 'GitHub 用户的公开信息，如头像、bio、粉丝数、仓库数等'
          },
          {
            valueType: WorkflowIOValueTypeEnum.arrayObject,
            key: 'repos',
            label: '公开仓库列表',
            description: '该用户的所有公开仓库'
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
            key: 'username',
            label: 'GitHub username',
            description: 'GitHub username to search. Example: octocat',
            required: true,
            valueType: WorkflowIOValueTypeEnum.string,
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            toolDescription: 'GitHub username to search. Example: octocat'
          }
        ],
        outputs: [
          {
            valueType: WorkflowIOValueTypeEnum.object,
            key: 'userInfo',
            label: 'User basics',
            description: 'Public information of the GitHub user, such as profile image, bio, followers, and repositories.'
          },
          {
            valueType: WorkflowIOValueTypeEnum.arrayObject,
            key: 'repos',
            label: 'Public repository list',
            description: 'All public repositories owned by the user'
          }
        ]
      }
    ]
  }
});
