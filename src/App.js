import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import StartScreen from './StartScreen'; // StartScreen 컴포넌트를 import
import ExplainScreen from './ExplainScreen'; // ExplainScreen 컴포넌트를 import
import AboutScreen from './AboutScreen'; // AboutScreen 컴포넌트를 import

function App() {
  const [currentScreen, setCurrentScreen] = useState('start');

  const handleStartButtonClick = () => {
    setCurrentScreen('startScreen');
  };

  const handleHomeButtonClick = () => {
    const confirmResponse = window.confirm('홈으로 가시겠습니까?');
    if (confirmResponse) {
      setCurrentScreen('start');
    }
  };

  const handleExplainButtonClick = () => {
    setCurrentScreen('explainScreen');
  };

  const handleAboutButtonClick = () => {
    setCurrentScreen('aboutScreen');
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleHomeButtonClick();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      {currentScreen === 'start' && (
        <div>
          <h1>김펭규 키우기</h1>
          <button className="button" id="startButton" onClick={handleStartButtonClick}>Start</button>
          <button className="button" id="explainButton" onClick={handleExplainButtonClick}>Explain</button>
          <button className="button" id="aboutButton" onClick={handleAboutButtonClick}>About</button>
        </div>
      )}
      {currentScreen === 'startScreen' && <StartScreen onStartButtonClick={handleStartButtonClick} />}
      {currentScreen === 'explainScreen' && <ExplainScreen />}
      {currentScreen === 'aboutScreen' && <AboutScreen />}
      {currentScreen === 'confirm' && (
        <div className="confirm-message">
          <h2>홈으로 가시겠습니까?</h2>
          <div className="confirm-buttons">
            <button onClick={handleHomeButtonClick}>확인</button>
            <button onClick={() => setCurrentScreen('startScreen')}>취소</button>
          </div>
        </div>
      )}
      {/* 홈 버튼 */}
      <button className="home-button" onClick={handleHomeButtonClick}>다시할랭</button>
    </div>
  );
}

export default App;
