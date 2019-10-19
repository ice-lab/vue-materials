/* eslint arrow-body-style:0 */
const oss = require('ali-oss');
const path = require('path');
const fs = require('fs');
const pkgData = require('../package.json');

const bucket = 'iceworks';
const accessKeyId = process.env.ACCESS_KEY_ID;
const accessKeySecret = process.env.ACCESS_KEY_SECRET;
const branch = process.env.TRAVIS_BRANCH;
const dirPath = pkgData.kitVersion === '3.x' ? 'materials/' : '/';
let assetsPath;

if (['master', 'stable/kit-2.x'].indexOf(branch) === -1) {
  assetsPath = 'pre-assets';
} else {
  assetsPath = 'assets';
}

const ossClient = oss({
  bucket,
  endpoint: 'oss-cn-hangzhou.aliyuncs.com',
  accessKeyId,
  accessKeySecret,
  time: '120s',
});

const materialPath = path.resolve(__dirname, '../build/materials.json');
const toPath = path.join(assetsPath, dirPath, 'vue-materials.json');

/**
 * 按照下载量进行排序推荐
 */
function sortScaffoldMaterials() {
  return new Promise((resolve, reject) => {
    const materialsData = JSON.parse(fs.readFileSync(materialPath, 'utf-8'));

    materialsData.scaffolds = materialsData.scaffolds.filter((currentItem) => {
      return currentItem.source.npm !== '@d2-admin/ice-scaffold"';
    });

    return fs.writeFile(
      materialPath,
      JSON.stringify(materialsData, null, 2),
      'utf-8',
      (err) => {
        if (err) reject(err);
        resolve();
      },
    );
  });
}

console.log('start upload oss', materialPath, toPath);

sortScaffoldMaterials()
  .then(() => {
    return ossClient.put(toPath, materialPath);
  })
  .then((result) => {
    console.log('upload success', result);
  });
