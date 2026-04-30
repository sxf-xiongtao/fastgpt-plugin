import { createRoute, z } from '@hono/zod-openapi';
import { createResponseSchema, ErrorResponseSchema } from '@/utils/http';
import { TemplateListSchema } from './common';

// GET /list - List all workflow templates
export const listWorkflowsRoute = createRoute({
  method: 'get',
  path: '/list',
  tags: ['Workflows'],
  summary: 'List workflow templates',
  description: 'Get a list of all available workflow templates, optionally filtered by locale',
  request: {
    query: z.object({
      locale: z
        .enum(['zh-CN', 'zh-Hant', 'en'])
        .optional()
        .default('zh-CN')
        .describe('The locale to filter templates by')
    })
  },
  responses: {
    200: {
      description: 'List of workflow templates',
      content: {
        'application/json': {
          schema: createResponseSchema(TemplateListSchema)
        }
      }
    },
    500: {
      description: 'Templates init failed',
      content: {
        'application/json': {
          schema: ErrorResponseSchema
        }
      }
    }
  }
});
