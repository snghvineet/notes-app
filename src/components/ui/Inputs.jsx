import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosCheckmark } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

export function Checkbox() {
	const [checked, setChecked] = useState(false);
	return (
		<div className='flex items-center'>
			<input
				type='checkbox'
				className='h-4 w-4 absolute opacity-0'
				checked={checked}
				onChange={() => setChecked((val) => !val)}
			/>
			<div
				className={twMerge(
					'h-4 w-4 border rounded flex items-center justify-center',
					checked ? 'bg-lime-400 text-black' : ''
				)}
			>
				<span className={!checked && 'invisible'}>
					<IoIosCheckmark />
				</span>
			</div>
		</div>
	);
}
