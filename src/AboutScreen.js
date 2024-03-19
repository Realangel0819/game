// AboutScreen.js
import React, { useState } from 'react';
import StartScreen from './StartScreen'; // StartScreen 컴포넌트를 import
import lookup from './Look_up.jpg'; // 이미지 경로를 import
import './AboutScreen.css'; // AboutScreen.css 파일을 import
function AboutScreen() {
  const [showStartScreen, setShowStartScreen] = useState(false); // startScreen을 보여줄지 여부를 state로 관리

  const handleStartButtonClick = () => {
    setShowStartScreen(true); // startScreen을 보여주도록 상태 업데이트
  };

  return (
    <div className="Aboutscreen">
      {!showStartScreen && ( // showStartScreen이 false인 경우에만 AboutScreen 컴포넌트를 보여줌
        <>
          <img className="lookpeng" src={lookup} alt="올려다보는 펭규" />
          <p>펭귄을 키우는 게임입니다. 펭귄을 먹이주고, 재우고, 호감도를 올려보세요. 레벨이 올라갈수록 다양한 기능이 열립니다.</p>
          <button className="start-button" onClick={handleStartButtonClick}>게임 시작</button>
        </>
      )}
      {showStartScreen && <StartScreen />} {/* showStartScreen이 true인 경우에만 StartScreen 컴포넌트를 보여줌 */}
    </div>
  );
}

export default AboutScreen;
