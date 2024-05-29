import './App.css';
import React, { useState } from 'react';
import StyleSheet from './data/style.json';
import ShowVideo from './components/ShowVideo';

function App() {

  //declaring variables to hold values for styling of subtitle.
  //created a file(style.json) to hold different styling option.

  const [tempfontSize, setFontSize] = useState(StyleSheet.fontSize[0]);
  const [tempfontColor, setFontColor] = useState(StyleSheet.fontTheme.regular[0]);
  const [tempfontBackground, setFontBackground] = useState(StyleSheet.fontTheme.regular[1]);
  const [tempfontTheme, setFontTheme] = useState('regular');
  const [ifApplied, setIfApplied] = useState(["Theme applied"]);

  //To handle values.
  const handleSelectedOption = (e,index)=>{
    //conditionally setting the properties using css variables.
    if(index===1) {
      setFontSize(e.target.value);
      document.documentElement.style.setProperty('--cue-font', e.target.value);
    }

    else if(index===2) {
      setFontColor(e.target.value);
      document.documentElement.style.setProperty('--cue-color', e.target.value);
      setIfApplied(["Theme not applied"]);
    }

    else if(index===3) {
      const temp = StyleSheet.fontBackground[e.target.value];
      setFontBackground(e.target.value);
      document.documentElement.style.setProperty('--cue-background', temp);
      setIfApplied(["Theme not applied"]);  
    }

    else if(index==4) {
      const temp = StyleSheet.fontTheme[e.target.value];
      const temp1 = StyleSheet.fontBackground[temp[1]];
      setFontTheme(e.target.value);
      setFontBackground(temp[1]);
      setFontColor(temp[0]);
      document.documentElement.style.setProperty('--cue-color', temp[0]);
      document.documentElement.style.setProperty('--cue-background',temp1 );
      setIfApplied(["Theme applied"]);
    }
  }
  
  return (
    <div className="App">
      <div className='heading'>Clipo AI Private Limited - Assignment</div>
      <div className='heading2'>Changing format of Subtitle</div>
      <div className='handle-styling'>
        <label htmlFor="font-size-select" className='text1 font-size-label'> 
                    Select Font Size : 
          <select id='font-size-select' className="text2" value={tempfontSize} onChange={(event)=>{handleSelectedOption(event,1)}}>
            
            {StyleSheet["fontSize"].map((tempoption, index) => (
            <option key={index} value={tempoption}>{tempoption.slice(0, 4)}</option>
            ))}
          </select>
        </label>

        <label htmlFor="font-color-select" className='text1 font-color-label'> 
                    Select Font Color : 
          <select id='font-color-select' className="text2" value={tempfontColor} onChange={(event)=>{handleSelectedOption(event,2)}}>
            
            {StyleSheet["fontColor"].map((tempoption, index) => (
            <option key={index} value={tempoption}>{tempoption}</option>
            ))}
          </select>
        </label>

        <label htmlFor="font-bckgrnd-select" className='text1 font-bckgrnd-label'> 
                    Select Font Background : 
          <select id='font-bckgrnd-select' className="text2" value={tempfontBackground} onChange={(event)=>{handleSelectedOption(event,3)}}>
            
            {Object.keys(StyleSheet.fontBackground).map((tempoption, index) => (
            <option key={index} value={tempoption}>{tempoption}</option>
            ))}
          </select>
        </label>

        <label htmlFor="font-theme-select" className='text1 font-theme-label'> 
                    Select Font Theme : 
          <select id='font-theme-select' className="text2" value={tempfontTheme} onChange={(event)=>{handleSelectedOption(event,4)}}>
            
            { Object.keys(StyleSheet.fontTheme).map((tempoption, index) => 
               <option key={index} value={tempoption}>{tempoption}</option>    
            )}
          </select>
          <div className='alert-theme'>** {ifApplied}</div>
        </label>
      </div>
      <ShowVideo/>
    </div>
  );
}

export default App;
