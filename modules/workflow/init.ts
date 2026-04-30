import { isProd } from '@/constants';
import { getLogger, mod } from '@/logger';

const logger = getLogger(mod.workflow);
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import type { TemplateItemType, TemplateListType } from './type';

const SUPPORTED_LOCALES = ['zh-CN', 'zh-Hant', 'en'];
const DEFAULT_LOCALE = 'zh-CN';

export const workflows: Record<string, TemplateListType> = {};

export const initWorkflowTemplates = async () => {
  const publicWorkflowsPath = isProd
    ? join(process.cwd(), 'dist', 'workflows')
    : join(process.cwd(), '..', 'modules', 'workflow', 'templates');

  // according to the environment to decide to read the way
  const entries = await readdir(publicWorkflowsPath, { withFileTypes: true });
  const localeDirs = entries.filter((entry) => entry.isDirectory());

  for (const localeDir of localeDirs) {
    const locale = localeDir.name;
    if (!SUPPORTED_LOCALES.includes(locale)) {
      continue;
    }

    const localePath = join(publicWorkflowsPath, locale);
    const items = await readdir(localePath, { withFileTypes: true });
    const templateItems = items.filter((item) => item.isFile() && item.name.endsWith('.json'));

    workflows[locale] = [];

    for (const item of templateItems) {
      const dirName = isProd ? item.name.replace('.json', '') : item.name; // hack: Bun and Node.js diff

      const templatePath = join(localePath, item.name);

      const fileBuffer = await readFile(templatePath, 'utf-8');
      const fileContent = fileBuffer.toString();
      const templateData = JSON.parse(fileContent);

      const template = {
        ...templateData,
        templateId: dirName,
        isActive: true
      } as TemplateItemType;

      workflows[locale].push(template);
    }

    logger.info(`[init] loaded ${workflows[locale].length} ${locale} workflow templates`);
  }

  // Fallback: load default locale if not found
  if (!workflows[DEFAULT_LOCALE] && Object.keys(workflows).length > 0) {
    const firstLocale = Object.keys(workflows)[0];
    workflows[DEFAULT_LOCALE] = workflows[firstLocale];
    logger.warn(`[init] default locale ${DEFAULT_LOCALE} not found, using ${firstLocale}`);
  }
};
