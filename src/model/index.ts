import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  mergeWith,
  move,
  filter,
  noop,
  SchematicsException,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function model(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.warn(`You can add a service using --add-service`);

    const angularConfig = tree.read('/angular.json');
    if (!angularConfig) {
      _context.logger.info('\nYou are not in an angular project!\n');
      // throw new SchematicsException('You are not in an Angular project!!');
    }

    const jsonPath = `${_options.path}/models/${ strings.dasherize(_options.name)}/${strings.dasherize(_options.name)}.json`;

    const file = tree.read(jsonPath) as any;

    if (!file) {
      throw new SchematicsException(
        `
        Error: ${strings.dasherize(_options.name)}.json file configuration not found in ${jsonPath}, please create it.
        If you need help, follow the readme for more instructions: 
        https://github.com/RicardoR/ricardo-schematics`
      );
    }

    const entitiesList: any[] = [];

    if (file) {
      const jsonParsed = JSON.parse(file);
      jsonParsed.data.forEach((element: any) => entitiesList.push(element));
    }

    const templateSource = apply(url('./files'), [
      _options.addService
        ? noop()
        : filter((path) => !path.endsWith('.service.ts')),
      template({
        ...strings,
        ..._options,
        entitiesList,
      }),
      move(_options.path),
    ]);
    tree = mergeWith(templateSource)(tree, _context) as Tree;

    return tree;
  };
}
