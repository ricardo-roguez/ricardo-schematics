import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('model', () => {
  it('works', async () => {
    console.log(__dirname);
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematic('model', {name: 'testing', path: '.'}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
