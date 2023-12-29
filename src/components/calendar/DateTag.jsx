import { twMerge } from 'tailwind-merge';

function DateTag({ day, date, selected, onClick }) {
	return (
		<button
			className={twMerge(
				'flex flex-grow items-center justify-center gap-1 rounded-xl h-20 bg-black/10 backdrop-blur-lg mx-1',
				selected && 'bg-white shadow-lg'
			)}
			onClick={onClick}
		>
			<span
				className={twMerge(
					'text-gray-600 font-light',
					selected && 'text-red-400'
				)}
			>
				{day}
			</span>
			<span
				className={twMerge(
					'text-4xl font-semibold',
					selected && 'text-red-400'
				)}
			>
				{date}
			</span>
		</button>
	);
}

export default DateTag;
