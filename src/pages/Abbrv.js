import React from 'react'
import './Abbvr.css';
import { Link } from 'react-router-dom';

const jsonData = require('./SSEAbv.json');
// convert jsonData to array
const abbrv = Object.keys(jsonData).map(key => jsonData[key]);

let id = 0;
// create a new div for each item in the array
const abbrvDiv = abbrv.map(item => {
  id++;
  return (
    <div>
      <div className='abbrv-div'>
        <div className='abbrv-info'>
          <div className='abbrv-id'>
            {id}
          </div>
          <a href={item.link}>
            <div className='abbrv-short'>
              <b>{item.short}</b>
            </div>
          </a>
          <div className='abbvr-long'>
            {item.long}
          </div>
        </div>
        <div className='abbrv-desc'>
          {item.desc}
        </div>
      </div>
    </div>
  )
});

const authorNote = (
  <div className='author-div'>
    <p><h3>This list is not perfect</h3>
      And I know that. If you feel like you want something changed
      here, please feel free to send feedback over on the
      &nbsp;<a href="https://github.com/Ozzymand/skyrim_plugins">github page</a>&nbsp;
      or even make a pull request and change it yourself! Just edit <code>src/pages/SSEAbv.json</code>
    </p>
    <p>
      Tip: use <code>Ctrl + F</code> to find stuff faster!
    </p>
  </div>
)

function Abbrv() {
  return (
    <div>
      <div id='header'>
        <div id='header-info'>
          Total in db: <b>{abbrv.length}</b> |
          Revision: <b>12/6/2022</b>
        </div>
        <div id='header-link'>
          <Link to='/abbrvraw'>raw</Link>
        </div>
      </div>
      <div className='small'>
        This lingo is intended for users; for developers, see Advanced Lingo
      </div>
      <div className='container'>
        <div className='left'>
          {abbrvDiv}
        </div>
        <div className='right'>
          <div className='author-note'>
            {authorNote}
          </div>
        </div>
      </div>
      <div className='footer'>
        inspired by <a href="https://forums.nexusmods.com/index.php?/topic/11539338-new-to-modding-need-help/">this thread</a> from the nexus forums
      </div>
    </div>
  )
};

export default Abbrv;