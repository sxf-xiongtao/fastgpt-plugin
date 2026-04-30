import { workflows } from '@workflow/init';
import { R, createOpenAPIHono } from '@/utils/http';
import { listWorkflowsRoute } from './schemas/routes';

const DEFAULT_LOCALE = 'zh-CN';
const workflow = createOpenAPIHono();

/**
 * List workflow templates
 * Accepts optional `locale` query parameter (e.g., zh-CN, zh-Hant, en)
 */
workflow.openapi(listWorkflowsRoute, async (c) => {
  const locale = c.req.query('locale') || DEFAULT_LOCALE;
  const localeWorkflows = workflows[locale] || workflows[DEFAULT_LOCALE];

  if (localeWorkflows) {
    return c.json(R.success(localeWorkflows), 200);
  } else {
    return c.json(R.error(500, 'Templates init failed'), 500);
  }
});

export default workflow;
