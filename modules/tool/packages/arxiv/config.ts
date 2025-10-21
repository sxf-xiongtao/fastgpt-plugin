import { defineToolSet } from '@tool/type';
import { ToolTypeEnum } from '@tool/type/tool';

export default defineToolSet({
  name: {
    'zh-CN': 'ArXiv 工具集',
    en: 'arXiv toolkit'
  },
  type: ToolTypeEnum.scientific,
  description: {
    'zh-CN': '提供 ArXiv 论文检索相关功能，包括关键词搜索、排序等',
    en: 'Provides paper search features, including keyword search and sorting.'
  }
});
