
// 请求数据
import { mkdir } from 'fs/promises';
import path from 'path';

const route = 'siqin'
console.log('开始初始化')

try {
    await mkdir(path.join(`./src/pages/${route}`));
  } catch (err) {
    console.log('目录已经存在, 请重新指定') 
    process.exit(0)
  }
console.log('创建成功') 

