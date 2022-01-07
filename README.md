# Vue Materials

ICE official Vue materials, based on [Vue CLI](https://cli.vuejs.org) build tool and [Element](https://element.eleme.io/#/zh-CN) components.

## Quick Start

We recommend you to use vue materials by [Iceworks](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks). Click [here](https://ice.work/docs/iceworks/quick-start) to learn more about how to install Iceworks.

### Use Vue Scaffolds

Open a empty workspace in your VS Code and click the Iceworks Icon in the activity bar, the application creator panel will be started up. Click the **Vue Materials** material source and  then select a vue scaffold to create a application.

![use-vue-scaffolds](https://img.alicdn.com/tfs/TB1GBS8mRBh1e4jSZFhXXcC9VXa-1089-768.png)

### Use Vue Blocks and Components

Create a vue page by vue blocks materials.

![use-blocks-to-create-page](https://img.alicdn.com/tfs/TB1OySIWeL2gK0jSZPhXXahvXXa-1440-809.png)

For more detail, you can see [docs](https://ice.work/docs/iceworks/guide/visual-construction).


## How to deplopy it to [vercel](https://vercel.com) manually

1. Install [vercel-cli](https://github.com/vercel/vercel/tree/main/packages/cli) globally

```shell
$ npm i -g vercel
```

2. Run vercel at corresponding directory

For example:

```shell
$ cd scaffolds/icestark-child-app
$ vercel
```

3. Link to existing project on vercel

```shell
? Link to existing project? [y/N] y
? What’s the name of your existing project? icestark-vite-vue
```

+ `scafflods/icestark-child-app` -> `icestark-vite-vue`
+ `scafflods/icestark-framework-app` -> `icestark-framework-vue3-x`


4. If you don't have access, ask [@maoxiaoke](https://github.com/maoxiaoke) for help.

## License

[MIT](LICENSE)