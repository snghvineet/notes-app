import { twMerge } from 'tailwind-merge';
import { getColorForTask } from './util';

function DayColumn({ tasks }) {
	return (
		<div className='w-full h-full relative border-x '>
			{tasks.map((task) => (
				<SlotSegment
					key={task.start}
					start={task.start}
					end={task.end}
					data={task.data}
				/>
			))}
		</div>
	);
}

function SlotSegment({ start, end, data }) {
	const top = `${start}%`;
	const height = `${end - start}%`;
	const color = getColorForTask();
	return (
		<div
			className={twMerge(
				'absolute w-full rounded-xl border-2 hover:shadow-lg',
				color.bg,
				color.border
			)}
			style={{ top, height }}
		>
			<div className={twMerge('flex flex-col mt-4 px-3 gap-1 ', color.text)}>
				<span className='text-sm font-semibold'>{data?.title}</span>
				<span className='text-xs'>
					{data?.from.split(' ')[0]} - {data?.to.split(' ')[0]}
				</span>
			</div>
		</div>
	);
}

export default DayColumn;
