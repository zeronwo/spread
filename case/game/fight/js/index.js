bodymovin.loadAnimation({
  path:'data.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('dg-fight')
});
//bodymovin.js的完整api文档见GitHub项目首页(https://github.com/bodymovin/bodymovin)

