require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
let imagesDatas = require('../data/imageDatas.json');
//利用自执行函数将图片名信息转换为路径信息
imagesDatas = (function getImageURL(imgDatasArr){
	for(let i = 0, j = imgDatasArr.length; i < j; i++){
		let singleImageData = imgDatasArr[i];
		singleImageData.imgURL = require('../images/'+singleImageData.fileName);
		imgDatasArr[i] = singleImageData;
	}
	return imgDatasArr;
})(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      		<section className="img-sec">
      		</section>
      		<nav className="controller-nav">
      		</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
