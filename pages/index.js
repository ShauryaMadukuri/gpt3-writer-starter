import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import {useState} from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Unleash Your Inner Poet</h1>
          </div>
          <div className="header-subtitle">
            <h2>Unlock Creative Rhymes and Verses Instantly</h2>
          </div>
        </div>
        {/* Add this code here*/}
        
        <div className="prompt-container">
          <textarea className='prompt-box'
            placeholder="Enter a prompt here..."
            value={userInput}
            onChange={onUserChangedText}
          />
          {/* button */}
          <div className="prompt-buttons">
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
          </div>
        </div>

        

        
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
