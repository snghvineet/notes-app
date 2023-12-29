import { twMerge } from 'tailwind-merge';
export default function DateTile({ date, inactive, today, onTap, selected }) {
	const extra = today ? 'bg-lime-300 text-neutral-900 font-medium' : '';
	return (
		<button
			onClick={onTap}
			className={twMerge(
				`font-light ${inactive ? 'text-neutral-600' : 'text-gray-100'} 
				text-sm text-center flex-grow rounded-full w-8 h-8 m-0.5 flex items-center justify-center cursor-default`,
				extra,
				!today && onTap && 'hover:bg-white/5',
				selected && !today ? 'border border-lime-200 text-lime-200' : ''
			)}
		>
			{date}
		</button>
	);
}
