import React from 'react';
import './AbbrvRaw.css';

const jsonData = require('./SSEAbv.json');
const abbrv = JSON.stringify(jsonData);

function AbbrvRaw() {
	return (
		<div>
			<div className='code-block'>
				<code>
					{abbrv}
				</code>
			</div>
		</div>
	)
}

export default AbbrvRaw;