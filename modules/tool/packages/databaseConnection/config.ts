import { defineTool } from '@tool/type';
import { FlowNodeInputTypeEnum, WorkflowIOValueTypeEnum } from '@tool/type/fastgpt';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineTool({
  type: ToolTypeEnum.tools,
  name: {
    'zh-CN': '数据库连接',
    en: 'Database connection'
  },
  description: {
    'zh-CN': '可连接常用数据库，并执行sql',
    en: 'Supports connecting to popular databases and executing SQL statements.'
  },
  icon: 'core/workflow/template/datasource',
  versionList: {
    'zh-CN': [
      {
        value: '0.1.0',
        description: 'Default version',
        inputs: [
          {
            renderTypeList: [FlowNodeInputTypeEnum.input, FlowNodeInputTypeEnum.reference],
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'sql',
            label: 'SQL',
            description: 'sql语句，可以传入sql语句直接执行',
            defaultValue: '',
            list: [
              {
                label: '',
                value: ''
              }
            ],
            required: true,
            toolDescription: 'sql语句，可以传入sql语句直接执行'
          }
        ],
        outputs: [
          {
            key: 'result',
            label: '结果',
            description: '执行结果',
            valueType: WorkflowIOValueTypeEnum.string
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
            selectedTypeIndex: 0,
            valueType: WorkflowIOValueTypeEnum.string,
            key: 'sql',
            label: 'SQL',
            description: 'SQL statement, which can be input for direct execution.',
            defaultValue: '',
            list: [
              {
                label: '',
                value: ''
              }
            ],
            required: true,
            toolDescription: 'SQL statement, which can be input for direct execution.'
          }
        ],
        outputs: [
          {
            key: 'result',
            label: 'Result',
            description: 'Execution result',
            valueType: WorkflowIOValueTypeEnum.string
          }
        ]
      }
    ]
  },
  secretInputConfig: {
    'zh-CN': [
      {
        key: 'databaseType',
        label: '数据库类型',
        required: true,
        inputType: 'select',
        list: [
          {
            label: 'MySQL',
            value: 'MySQL'
          },
          {
            label: 'PostgreSQL',
            value: 'PostgreSQL'
          },
          {
            label: 'Microsoft SQL Server',
            value: 'Microsoft SQL Server'
          }
        ]
      },
      {
        key: 'host',
        label: 'Host',
        required: true,
        inputType: 'input'
      },
      {
        key: 'port',
        label: '数据库连接端口号',
        required: true,
        inputType: 'numberInput'
      },
      {
        key: 'databaseName',
        label: '数据库名称',
        required: true,
        inputType: 'input'
      },
      {
        key: 'user',
        label: '数据库账号',
        required: true,
        inputType: 'input'
      },
      {
        key: 'password',
        label: '数据库密码',
        required: true,
        inputType: 'secret'
      }
    ],
    en: [
      {
        key: 'databaseType',
        label: 'Database type',
        required: true,
        inputType: 'select',
        list: [
          {
            label: 'MySQL',
            value: 'MySQL'
          },
          {
            label: 'PostgreSQL',
            value: 'PostgreSQL'
          },
          {
            label: 'Microsoft SQL Server',
            value: 'Microsoft SQL Server'
          }
        ]
      },
      {
        key: 'host',
        label: 'Host',
        required: true,
        inputType: 'input'
      },
      {
        key: 'port',
        label: 'Database port',
        required: true,
        inputType: 'numberInput'
      },
      {
        key: 'databaseName',
        label: 'Database name',
        required: true,
        inputType: 'input'
      },
      {
        key: 'user',
        label: 'Database username',
        required: true,
        inputType: 'input'
      },
      {
        key: 'password',
        label: 'Database password',
        required: true,
        inputType: 'secret'
      }
    ]
  }
});
