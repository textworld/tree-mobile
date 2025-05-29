import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { NavBar, Space, Toast } from 'antd-mobile'
import classNames from 'classnames';
import QuestionComponent from './QuestionComponent';

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
  const [imageUrl, setImageUrl] = useState('https://tree.textworld.cn/images/newpic' + name + '.png');
  const [isLoading, setIsLoading] = useState(true); // 默认为加载中
  
  const handleImageLoaded = () => {
    setIsLoading(false); // 图片加载完成后，更新状态
  };
  const imageClass = classNames('long-image', {
    'loading': isLoading,
    'loaded': !isLoading
  });


  const questions1 = [
    {
      'question': '1、关于绍兴市人民医院胸外科的陪护要求，以下哪项是正确的？ ',
      'options': [
          "陪护人员可以随意更换，人数不限",
          "陪护椅需在上午7:00、下午14:00前收起，夜间20:30前拉开 ",
          "年老体弱的家属可以优先陪护",
          "探视时间为每天8:00-22:00"
      ],
      'answer': 1
    },
    {
      'question': '2、在病房管理中，以下哪项行为是被禁止的？ ',
      'options': [
        "使用床头二维码扫描订餐 ",
        "将热水壶放置于柜子中",
        "在病房内使用大功率电器",
        "衣服晾在晾衣间  "
      ],
      'answer': 2
    }
  ];

  const questions2 = [
    {
      'question': '1、术前需常规禁食多少小时？ ',
      'options': [
        "8小时",
        "6小时",
        "4小时",
        "2小时"
      ],
      'answer': 1
    },
    {
      'question': '2、术前需常规禁清饮多少小时？ ',
      'options': [
        "8小时",
        "6小时",
        "4小时",
        "2小时"
      ],
      'answer': 3
    }
  ];

  const questions3 = [
    {
      'question': '1、术后6小时进食流质时，以下哪项是正确的？',
      'options': [
        "可以立即进食固体食物",
        "需循序渐进，少量多餐，避免呛咳",
        "必须平躺进食",
        "无需遵循医嘱，随意进食"
      ],
      'answer': 1
    },
    {
      'question': '2、关于胸腔引流管的注意事项，以下哪项是错误的？',
      'options': [
        "活动时避免牵拉、扭曲管道",
        "引流瓶可以高于引流管口",
        "避免管道滑脱",
        "保持管道通畅"
      ],
      'answer': 1
    }
  ];

  const questions4 = [
    {
      'question': '1、术后第一天饮食建议中，以下哪项是正确的？  ',
      'options': [
        "可以随意进食油炸、辛辣食物",
        "建议少量多餐，避免油炸、辛辣食物",
        "必须完全禁食",
        "无需控制食量，吃饱为止"
      ],
      'answer': 1
    },
    {
      'question': '2、下床活动时的正确步骤是？ ',
      'options': [
        "直接站立行走",
        "平卧30秒，坐起30秒，站立30秒，无头晕再行走",
        "快速起身避免头晕",
        "无需观察，随意活动"
      ],
      'answer': 1
    }
  ];

  const questions5 = [
    {
      'question': '1、出院后饮食建议中，以下哪项是错误的？',
      'options': [
        "多吃新鲜蔬菜、水果",
        "避免油炸、煎烤、辛辣食物",
        "可以随意高脂肪、高热量饮食",
        "禁烟限酒"
      ],
      'answer': 2
    },
    {
      'question': '2、关于出院结账方式，以下哪项是正确的？ ',
      'options': [
        "现金结算必须到自助机办理",
        "非现金结算可通过支付宝、微信、银行卡支付",
        "结账时间从中午 12 点开始",
        "无需携带医保卡"
      ],
      'answer': 1
    }
  ];

  const variableName = 'questions' + name; // 构建变量名
  const questions = eval(variableName); // 使用 eval 解析变量

  const back = () =>
    navigate('/');
  return (
      <div>
        <NavBar back='返回' onBack={back}>{zh}</NavBar>
        {isLoading ? (
            <div className='tips'>图片加载中，请稍后...</div> // 如果正在加载，显示加载提示
        ) : null}
        <img className={imageClass} src={imageUrl} alt="" onLoad={handleImageLoaded}/>
        <div className="questions-list">
          {questions.map((questionData, index) => (
              <QuestionComponent
                  key={index} // 使用索引作为key（注意：如果数据会变化，建议使用唯一ID）
                  questionData={questionData}
              />
          ))}
        </div>
      </div>
  );
};

export default DocsPage;
