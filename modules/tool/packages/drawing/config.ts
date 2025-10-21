import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'BI图表功能',
    en: 'BI chart'
  },
  type: ToolTypeEnum.tools,
  description: {
    'zh-CN': 'BI图表功能，可以生成一些常用的图表，如饼图，柱状图，折线图等',
    en: 'Generates common charts such as pie charts, bar charts, and line charts.'
  },
  icon: 'core/workflow/template/BI'
});
