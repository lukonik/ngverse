import { Tree } from '@angular-devkit/schematics';
import { getElementPath, getTargetPath } from '../utils';
import { Schema } from './schema';

export function ui(options: Schema) {
  return async (host: Tree) => {
    const targetPath = await getTargetPath(host, options);
    const elementPath = getElementPath(host, options.name, 'ui');
    const elementDir = host.getDir(elementPath);
    const prefix = options.prefix;

    // Copy element files from the library to the application
    elementDir.visit((filePath) => {
      if (!options.includeTests && filePath.endsWith('.spec.ts')) {
        return;
      }
      let content = host.read(filePath)?.toString('utf-8');

      if (content !== undefined) {
        if (!prefixIsDefault(prefix)) {
          content = updatePrefix(content, prefix);
        }
        const mergedPath = filePath.replace(elementPath, targetPath);
        if (host.exists(mergedPath)) {
          host.overwrite(mergedPath, content);
        } else {
          host.create(mergedPath, content);
        }
      }
    });

    return host;
  };
}

function prefixIsDefault(prefix?: string) {
  return prefix === undefined || prefix === null || prefix === 'app';
}

/**
 * we take naive approach, and replace all the possible prefix for components and directives
 * @param content
 * @param prefix
 */
function updatePrefix(content: string, prefix: string) {
  const defaultSelector = 'app'; // Match 'app' as a whole word
  return content.replaceAll(defaultSelector, prefix);
}
