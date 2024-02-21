import './App.css';
import Editor from "./components/Editor/Editor";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import StatBox from "./components/StatBox/StatBox";
import React, { useEffect } from 'react';
import SettingsModal from "./components/SettingsModal/SettingsModal";

function App() {
  useEffect(() => {
    document.title = 'Programtastic - App';
  }, []);

  return (
    <div>
      <SettingsModal />
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="App.css" />
      </header>
      <div className="body">
      <nav>
        <div className="accountNavSection">
          <div className="accountNavSectionProfilePicture">
            {/*<img className="accountNavSectionProfilePictureImage" alt="Account Profile Picture" src=""/>*/}
            <div className="accountNavSectionProfilePictureImage"></div>
          </div>
          <p className="accountNavSectionUsername">LoremIpsum123</p>
          <div className="navBackgroundChisel" >
            <div className="navBackgroundChiselNegative" />
          </div>
        </div>
        <div className="tailNavSection">
          <div className="navBackgroundChunk" />
        </div>
      </nav>
      <main>
        <section className="fileViewerContainer">
          <div className="fileViewer">
            <section className="panelBody">

            </section>
            <div className="bottomPanelQuickInfo">
              <h4 className="bottomPanelQuickInfoStat ">SuperCoolProject</h4>
            </div>
          </div>
        </section>
        <section className="sourceCodeEditorContainer">
          <div className="sourceCodeEditor">
            <section className="panelBody">
              <Editor />
            </section>
            <div className="bottomPanelQuickInfo">
              <h4 className="bottomPanelQuickInfoStat ">src/folder/sourceFile.txt</h4>
              <h4 className="bottomPanelRightAlign bottomPanelQuickInfoStat bottomPanelQuickInfoPad">Waiting...</h4>
              <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">0ms</h4>
              <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">UTF-8</h4>
              <h4 className="bottomPanelQuickInfoStat bottomPanelQuickInfoPad">0 Lines</h4>
            </div>
          </div>
        </section>
        <section className="suggestionsViewerContainer">
          <div className="suggestions">
            <div className="suggestionsStats">
              <StatBox value="4" title="Stylistic Errors"/>
              <StatBox value="5" title="Improvements"/>
              <StatBox value="99%" title="Estimated Grade"/>
            </div>
            <div className="suggestionCards">

            </div>
            <div className="suggestionSettingsSection">
              <SettingsButton title="Evaluation Settings" callback={() => {SettingsModal.setDisplay(true)}}/>
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
}

export default App;
