import React, { forwardRef, useEffect, useRef, useState } from 'react';

function TextEditor() {
	const ref = useRef();
	useEffect(() => {
		// ref.current.
	}, []);
	return (
		<div
			ref={ref}
			id='text-editor'
			className='shadow outline-none w-3/5 h-full bg-white px-32 py-8'
			role='textbox'
			contentEditable
			onKeyUp={() => {
				const a = ref.current.innerHTML;
				console.log(a);
			}}
			onClick={() => {}}
		></div>
	);
}

TextEditor.displayName = 'TextEditor';
export default TextEditor;
