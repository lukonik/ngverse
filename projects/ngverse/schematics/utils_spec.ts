import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import {
  Schema as ApplicationOptions,
  Style,
} from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';

export function createTestRunner(projectName: string) {
  const collectionPath = require.resolve('./collection.json');

  const testRunner = new SchematicTestRunner('ngverse', collectionPath);
  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',

    newProjectRoot: 'projects',
    version: '19.0.6',
  };
  const appOptions: ApplicationOptions = {
    name: projectName,
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    style: Style.Css,
    skipTests: false,
    skipPackageJson: false,
  };

  return { testRunner, workspaceOptions, appOptions };
}

export function createTestTree(
  testRunner: SchematicTestRunner,
  workspaceOptions: WorkspaceOptions,
  appOptions: ApplicationOptions
) {
  return testRunner
    .runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions)
    .then((tree) => {
      return testRunner.runExternalSchematic(
        '@schematics/angular',
        'application',
        appOptions,
        tree
      );
    });
}
