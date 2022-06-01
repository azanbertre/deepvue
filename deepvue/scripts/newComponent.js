const { mkdir, ShellString, cd, sed, test } = require('shelljs')
const inquirer = require('inquirer');
const boxen = require('boxen');
const chalk = require('chalk');
const print = require('../build/utils/print.js');
const green = print('green');
const emptyLine = print();

const writeToFile = (contents, file) => {
  new ShellString(contents).to(file);
}

// * Gen Sass file
function FileSass(name) {
  return `@import '../../../styles/mixins'
@import 'root'

.d-${name.toLowerCase()}-content
  background: -color('color')

.d-${name.toLowerCase()}
  background: #000
  color: #fff
  `.trim()
}

// * Gen Root Sass file
function FileRootSass(name) {
  return `.d-${name.toLowerCase()}-content
  --d-color: var(--d-primary)`.trim()
}

// * Gen Index.ts file
function FileIndexTs(name) {
  return `import component from './d${name}';
import './style.sass';

component.install = (vue: any) => {
  vue.component('d-${name.toLowerCase()}', component);
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue);
}

export default component;
`
}

// * Gen Component file
function FileComponentTs(name) {
  return `
import {VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import DComponent from '../../../mixins/component';

@Component
export default class D${name} extends DComponent {

  @Prop({ default: false, type: Boolean }) loading: boolean

  public render(h: any): VNode {
    const ${name.toLowerCase()} = h('div', {
      staticClass: 'd-${name.toLowerCase()}'
    }, [this.$slots.default])

    return h('button', {
      staticClass: 'd-${name.toLowerCase()}-content',
    }, [${name.toLowerCase()}])
  }
}`.trim()
}

function addComponentJson(name) {
  sed('-i', '"[new]": ""', `"d${name}": "./src/components/d${name}/Base/index.ts",\n  "[new]": ""`, './build/components/components.json');
}

function addComponentExport(name) {
  sed('-i', '// [new]', `export { default as d${name} } from './d${name}/Base/index'\n// [new]`, './src/components/index.ts');
}

function addComponentConfig(name) {
  sed('-i', '// [new-1]', `{ text: '${name}', link: ${'`${lang}'}docs/components/${name}${'`'} },\n\t\t\t\t\t\t\t// [new-1]`, '../../config.js');
  sed('-i', '// [new-2]', `${'`${lang}'}docs/components/${name}${'`'},\n\t\t\t\t\t\t// [new-2]`, '../../config.js');
}

console.log(boxen('New Component Options', {padding: 1, margin: 2 , borderColor: 'yellow', borderStyle: 'round'}));

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What\'s the name of the new component?',
    filter: String,
    validate: (value) => {
      if (test('-e', `src/components/d${value}`)) {
        return 'The component already exists';
      } else if (!/^[A-Z]/.test(value)) {
        return 'The component name needs to be Capitalized';
      } else {
        return true
      }
    }
  }
];

// * Component Docs
function FileComponentExample(name) {
  return `<template>
  <div class="center">
    <d-${name.toLowerCase()}>
      Hello
    </d-${name.toLowerCase()}>
  </div>
</template>`.trim()
}

function FileComponentMD(name) {
  return `
# ${name}

<div>

## Default

Description

<div slot="example">
  <${name}-default />
</div>

<div slot="template">

  ${'```'}html{3,4,5}
    ...
  ${'```'}

</div>

<div slot="script">

  ${'```'}html{3,4,5}
    ...
  ${'```'}

</div>

</div>

<card>

## Other

Description

<div slot="example">
  <${name}-default />
</div>

<div slot="template">

  ${'```'}html{3,4,5}
    ...
  ${'```'}

</div>

<div slot="script">

  ${'```'}html{3,4,5}
    ...
  ${'```'}

</div>

</card>

<card>

## API

</card>`.trim()
}

inquirer.prompt(questions).then(answers => {
  const name = answers.name

  // * Docs
  cd(`../docs/docs/components`)
  writeToFile(FileComponentMD(name), `${name}.md`)
  mkdir('-p', `../../.vuepress/components/${name}`)
  cd(`../../.vuepress/components/${name}`)
  writeToFile(FileComponentExample(name), `default.vue`)
  addComponentConfig(name)

  // * Create Component Files
  cd('../../../../deepvue')

  addComponentJson(name)
  addComponentExport(name)
  mkdir('-p', `src/components/d${name}/Base`)
  cd(`src/components/d${name}/Base`)
  writeToFile(FileRootSass(name), `_root.sass`)
  writeToFile(FileSass(name), `style.sass`)
  writeToFile(FileIndexTs(name), `index.ts`)
  writeToFile(FileComponentTs(name), `d${name}.ts`)

  emptyLine()
  emptyLine()
  green(chalk.bold(`Component Created Successfully!`))
  emptyLine()
  emptyLine()
})
