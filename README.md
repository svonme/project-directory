### @fengqiaogang/project-directory

获取项目跟目录

**安装**
```
yarn add @fengqiaogang/project-directory
or
npm install @fengqiaogang/project-directory
```

**使用方法**

```
const getDirectory = require("@fengqiaogang/project-directory");
const directory = getDirectory();
```

**参数**

```
getDirectory(fileName?: string);
```

| 参数 | 是否必填 | 描述 |
| ------ | ------ | ------ |
| fileName | 否 | 默认为 package.json, 以该文件作为判断是否为项目跟目录的条件 |

