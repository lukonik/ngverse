import { normalize } from '@angular-devkit/core';
import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { getProjectFromWorkspace } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { join } from 'path';

export async function getTargetPath(
  host: Tree,
  options: { project: string; path?: string; name: string; replace?: boolean }
) {
  const workspace = await getWorkspace(host);

  const project = getProjectFromWorkspace(workspace, options.project);
  if (!project) {
    throw new SchematicsException(`Invalid project name: ${options.project}`);
  }
  const projectType =
    project.extensions['projectType'] === 'application' ? 'app' : 'lib';

  const rootPath = normalize(`${project.sourceRoot}/${projectType}`);
  let path = './';
  if (options.path) {
    path = `./${options.path}`;
  }
  const targetPath = normalize(join(rootPath, path, options.name));
  const applicationDir = host.getDir(targetPath);
  const applicationDirExists =
    applicationDir.subfiles.length > 0 || applicationDir.subdirs.length > 0;
  if (applicationDirExists && !options.replace) {
    throw new SchematicsException(
      `the ${options.name} already exists in ${targetPath}, use --replace=true option to overwrite`
    );
  }
  return targetPath;
}

export function getElementPath(host: Tree, name: string, module: string) {
  const path = normalize(
    join('node_modules', 'ngverse', 'src', 'lib', module, name)
  );
  const dir = host.getDir(path);
  const directoryExists = dir.subfiles.length > 0 || dir.subdirs.length > 0;
  if (!directoryExists) {
    throw new SchematicsException(`Could not find ${name}`);
  }
  return path;
}
