import { z } from 'zod';
import {
  ToolConfigSchema,
  ToolSchema,
  ToolSetConfigSchema,
  type toolConfigWithCbSchema,
  type ToolSetSchema
} from './tool';
import { FlowNodeOutputTypeEnum } from './fastgpt';

export type ToolConfigType = z.infer<typeof ToolConfigSchema>;
export type ToolConfigWithCbType = z.infer<typeof toolConfigWithCbSchema>;
export function defineTool(tool: ToolConfigType) {
  const processVersion = (version: any) => ({
    ...version,
    outputs: version.outputs.map((output: any) => ({
      ...output,
      type: output.type ?? FlowNodeOutputTypeEnum.static,
      id: output.id ?? output.key
    }))
  });

  let versionList: typeof tool.versionList;

  if (Array.isArray(tool.versionList)) {
    versionList = tool.versionList.map(processVersion);
  } else {
    versionList = Object.entries(tool.versionList).reduce((acc, [lang, versions]) => {
      acc[lang] = (versions as any[]).map(processVersion);
      return acc;
    }, {} as typeof tool.versionList);
  }

  return {
    ...tool,
    versionList
  };
}

export type ToolSetConfigType = z.infer<typeof ToolSetConfigSchema>;
export function defineToolSet(toolset: ToolSetConfigType) {
  return toolset;
}

export type ToolType = z.infer<typeof ToolSchema>;
export type ToolSetType = z.infer<typeof ToolSetSchema>;
