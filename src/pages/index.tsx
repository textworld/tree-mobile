import yayJpg from '../assets/yay.jpg';
import TreeBackgroupd from '../assets/apple-tree.jpeg'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const gotoPic1 = () => {
    // 处理点击事件
    console.log('gotoPic1');
    navigate('/docs?name=1&zh=入院当天');
  };

  const gotoPic2 = () => {
    // 处理点击事件
    console.log('gotoPic2');
    navigate('/docs?name=2&zh=术前一天');
  };

  const gotoPic3 = () => {
    // 处理点击事件
    console.log('gotoPic3');
    navigate('/docs?name=3&zh=术后第一天');
  };

  const gotoPic4 = () => {
    // 处理点击事件
    console.log('gotoPic4');
    navigate('/docs?name=4&zh=出院宣教');
  };

  const gotoPic5 = () => {
    // 处理点击事件
    console.log('gotoTest');
      navigate('/docs?name=5&zh=出院前一天');
  };

  return (
    <div className='container'>
      <img  className="background-image" src="https://tree.textworld.cn/images/apple-tree.jpeg"></img>
      <p className='title-p'>智 慧 树</p>
      <button
        className="button-apple"
        style={{
          top: '34vh',
          left: '10vw',
        }}
        onClick={gotoPic1}
      >入院当天</button>
      <button
        className="button-apple"
        style={{
          top: '27vh',
          left: '27vw',
        }}
        onClick={gotoPic2}
      >术前一天</button>
      <button
        className="button-apple"
        style={{
          top: '27vh',
          left: '54vw',
        }}
        onClick={gotoPic3}
      >手术当天</button>
      <button
        className="button-apple"
        style={{
          top: '34vh',
          right: '10vw',
        }}
        onClick={gotoPic4}
      >术后第一天</button>
      <button
        className="button-apple"
        style={{
          top: '34vh',
          right: '40vw',
        }}
        onClick={gotoPic5}
      >出院前一天</button>
    </div>
  );
}
