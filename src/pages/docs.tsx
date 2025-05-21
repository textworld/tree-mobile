import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar, Space, Toast } from 'antd-mobile'
import classNames from 'classnames';

const DocsPage = () => {
  const navigate = useNavigate();
  // 使用useLocation Hook获取当前的URL
  const location = useLocation();

  // 解析URL的查询字符串
  const searchParams = new URLSearchParams(location.search);

  // 获取参数名name的值
  const name = searchParams.get('name');
  let zh= searchParams.get('zh');

  // 使用useState Hook来管理图片URL的状态
  const [imageUrl, setImageUrl] = useState('https://tree.textworld.cn/images/pic' + name + '.png');
  const [isLoading, setIsLoading] = useState(true); // 默认为加载中
  
  const handleImageLoaded = () => {
    setIsLoading(false); // 图片加载完成后，更新状态
  };
  const imageClass = classNames('long-image', {
    'loading': isLoading,
    'loaded': !isLoading
  });

  const back = () =>
    navigate('/');
  return (
    <div>
      <NavBar back='返回' onBack={back}>{zh}</NavBar>
      {isLoading ? (
        <div className='tips'>图片加载中，请稍后...</div> // 如果正在加载，显示加载提示
      ) : null}
      <img  className={imageClass}   src={imageUrl} alt="" onLoad={handleImageLoaded} />
    </div>
  );
};

export default DocsPage;
