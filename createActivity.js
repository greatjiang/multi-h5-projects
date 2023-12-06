const fs =require('fs')
const path=require('path')

const activityName = process.argv[2]

if(!activityName){
  console.error('Please provide an activity name.')
  process.exit(1)
}

const activityDir = path.resolve(__dirname,'src/pages',activityName)

if(fs.existsSync(activityDir)){
  console.error('Activity directory already exists.');
  process.exit(1)
}

fs.mkdirSync(activityDir)

// 创建css文件夹
fs.mkdirSync(activityDir+'/css')
// 创建js文件夹
fs.mkdirSync(activityDir+'/js')

try{
//创建vue入口文件
  const templateJs = path.resolve(__dirname,'src/template/common/App.vue')
  const sourceFilePath=fs.readFileSync(templateJs, 'utf-8');

  fs.writeFileSync(activityDir+'/js/App.vue',sourceFilePath);
}catch(err){
  console.error('Error:', err.message);
}

// 读取模板中的内容，对应写入创建的活动中去
try{
  const templateJs = path.resolve(__dirname,'src/template/common/common.js')
  const sourceFilePath=fs.readFileSync(templateJs, 'utf-8');

  // 创建装在vue的js文件
  fs.writeFileSync(activityDir+'/js/index.js', sourceFilePath);
}catch(err){
  console.error('Error:', err.message);
}


// 创建img文件夹
fs.mkdirSync(activityDir+'/img')
// 创建 index.html文件
// 读取模板中的内容，对应写入创建的活动中去
try{
  const templateJs = path.resolve(__dirname,'src/template/common/common.html')
  const sourceFilePath=fs.readFileSync(templateJs, 'utf-8');

  // 创建html文件
  fs.writeFileSync(activityDir+'/index.html', sourceFilePath);
}catch(err){
  console.error('Error:', err.message);
}