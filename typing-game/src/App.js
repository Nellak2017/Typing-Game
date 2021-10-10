import React from 'react';
import './index.css';
import { WordBox } from './components';
import Top100Data from './data/PossibleWords'

function App() {

  console.log('the words list:');
  console.log(Top100Data[0].words);
  return (
    <div>
      <WordBox words={Top100Data[0].words}/>
      <div id="input-row" class="row">
        <div style={{ marginRight: "62px" }}>
          <input type="text" class="form-control" id="inputfield" autocomplete="off" data-form-type="other" />
        </div>
        <div style={{ float: "right", width: "55px", marginTop: "-50px" }}>
          <div style={{ width: "50px", float: "left", display: "block" }}>
            <button id="reload-btn" type="button" class="btn btn-primary btn-lg">
              <span class="glyphicon glyphicon-refresh"></span>
            </button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
