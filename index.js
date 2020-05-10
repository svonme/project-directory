/**
 * @file 获取项目跟目录
 * @author svon.me@gmail.com
 */

var fs = require('fs');
var path = require('path');

function main(directory, fileName) {
  try {
    var name = path.join(directory, fileName);
    var stat = fs.statSync(name);
    if (stat) {
      return name;
    }
  } catch (error) {
    // todo
  }
  var dir = path.join(directory, '..');
  if (dir !== directory) {
    return main(dir, fileName);
  }
  return void 0;
}

/**
 * 以什么为参照物作来判断是否为项目跟目录
 * @param {*} fileName 文件名称，默认为 package.json
 */
function getDirectory(fileName) {
  if (!fileName) {
    fileName = 'package.json';
  }
  // 程序执行目录
  var cwd = process.cwd();
  // 当前脚本目录
  var currDir = __dirname;
  var directory = void 0;
  // 如果当前执行的目录是脚本的父级
  if (currDir.indexOf(cwd) >= 0) {
    // 从执行目录开始操作
    directory = main(cwd, fileName);
  } else {
    // 从第一个 node_modules 目录开始查找
    const index = currDir.indexOf('node_modules');
    if (index >= 0) {
      const src = currDir.slice(0, index);
      directory = main(src, fileName);
    } else {
      directory = main(currDir, fileName);
    }
  }
  if (directory) {
    return path.dirname(directory);
  }
  return void 0;
}

module.exports = getDirectory;
