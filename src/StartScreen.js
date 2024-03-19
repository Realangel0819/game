import React, { useState } from 'react';
import './StartScreen.css';
import lookup from './Look_up.jpg'; // 이미지 경로를 import

function StartScreen({ onStartButtonClick }) {
  const [experience, setExperience] = useState(0); // 경험치 상태 변수 추가

  // 펭귄 사진 클릭 시 경험치 증가 함수
  const handlePenguinClick = () => {
    setExperience(experience + 10); // 경험치 10 증가
  };

  return (
    <div className="StartScreen">
      <h1>안녕나는펭껄이야</h1>
      <img className="lookpeng" src={lookup} alt="올려다보는 펭규" onClick={handlePenguinClick} />
      <p>펭귄을 클릭하여 경험치를 획득하세요.</p>
      <p>현재 경험치: {experience}</p> {/* 경험치 표시 */}
      
    </div>
  );
}

export default StartScreen;
