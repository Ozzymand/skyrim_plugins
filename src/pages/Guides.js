import React from 'react';
import './Guides.css';

function Guides() {
    return (
        <div>
            Some useful guides for the developer.
            <div className='guide'>
                <div className='offsite-guides'>
                    <h4><a href="https://www.nexusmods.com/skyrimspecialedition/mods/70663">Import & Export animations from blender</a> </h4>
                </div>
                <div classname='site-guides'>
                    <div id='guide-container'>THINGS YOU WILL NEED
                        <div id='guide-content'>
                            - Skyrim Special Edition<br />
                            - Creation Kit<br />
                            - Creating Kit Engine Fixes<br />
                            - VSCode<br />
                            - Papyrus (Language Support Addon)<br />
                            - Blender<br />
                            - NIFSkope<br />
                            - NIFSkope blender plugins<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guides;