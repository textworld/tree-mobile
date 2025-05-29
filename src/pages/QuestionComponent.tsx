import React, { useState } from 'react';
import './QuestionComponent.css'; // 导入样式文件

const QuestionComponent = ({ questionData }) => {
    const { question, options, answer } = questionData;
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (index) => {
        if (!showResult) {
            setSelectedOption(index);
            setShowResult(true);
        }
    };

    const getOptionStyle = (index) => {
        if (!showResult) return {};
        if (index === answer) return { backgroundColor: '#22c55e', color: 'white' };
        if (index === selectedOption) return { backgroundColor: '#ef4444', color: 'white' };
        return {};
    };

    const getOptionPrefix = (index) => {
        if (!showResult) return `${String.fromCharCode(65 + index)}. `;
        if (index === answer) return `${String.fromCharCode(65 + index)}. ✔ `;
        if (index === selectedOption) return `${String.fromCharCode(65 + index)}. ❌ `;
        return `${String.fromCharCode(65 + index)}. `;
    };

    return (
        <div className="question-card">
            <div className="question-title">{question}</div>
            <div className="option-list">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="option-item"
                        style={getOptionStyle(index)}
                        onClick={() => handleOptionSelect(index)}
                    >
                        <span className="option-prefix">{getOptionPrefix(index)}</span>
                        <span className="option-text">{option}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;