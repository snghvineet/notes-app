import { useEffect, useReducer, useRef, useState } from 'react';
import DayColumn from './DayColumn';
import {
	days,
	extractTimeFromDate,
	timeFormatter,
	timeSlots,
	transformTimeToPoint,
} from './util';

const initialState = {
	w1: [],
	w2: [],
	w3: [],
	w4: [],
	w5: [],
	w6: [],
	w0: [],
};

function taskReducer(state, action) {
	if (action.type === 'book_slot') {
		const id = `w${action.payload.week}`;
		const tasks = state[id].slice();
		const { hour: startHour, minute: startMin } = extractTimeFromDate(
			action.payload.startTime
		);
		const { hour: endHour, minute: endMin } = extractTimeFromDate(
			action.payload.endTime
		);
		if (startHour < endHour) {
			const startPoint = transformTimeToPoint(startHour, startMin);
			const endPoint = transformTimeToPoint(endHour, endMin);

			tasks.push({
				start: startPoint,
				end: endPoint,
				data: {
					...action.payload.data,
					from: timeFormatter.format(action.payload.startTime),
					to: timeFormatter.format(action.payload.endTime),
				},
			});

			return { ...state, [id]: tasks };
		}
	}
	return initialState;
}

function CalendarContent() {
	const [state, dispatch] = useReducer(taskReducer, initialState);
	const [contentHeight, setContentHeight] = useState(0);
	const gridRef = useRef(null);
	useEffect(() => {
		if (gridRef) {
			setContentHeight(gridRef.current.scrollHeight);
		}
		dispatch({
			type: 'book_slot',
			payload: {
				data: {
					title: 'Read a book',
					desc: 'Read a chapter of Intelligent Investors',
				},
				week: 6,
				startTime: new Date('2023-12-26T11:01:39.000Z'),
				endTime: new Date('2023-12-26T15:01:39.000Z'),
			},
		});
	}, []);

	return (
		<div
			ref={gridRef}
			className='bg-white flex flex-grow rounded-xl my-3 mx-6 gap-3 overflow-scroll h-full scrollbar-hide'
		>
			<TimeSlots />
			<div className='h-full w-full relative'>
				<div className='mr-6'>
					{timeSlots.map((slot) => (
						<div
							key={slot}
							className='relative h-24 w-full border-b-2 text-end'
						></div>
					))}
				</div>
				<div
					className='absolute top-0 left-0 grid grid-cols-7 w-full pr-8 pl-2'
					style={{ height: contentHeight }}
				>
					{days.map((d, index) => {
						const id = `w${index}`;
						return <DayColumn key={'week' + index} tasks={state[id]} />;
					})}
				</div>
			</div>
		</div>
	);
}

function TimeSlots() {
	return (
		<div className='w-16 h-full'>
			{timeSlots.map((slot) => (
				<div key={slot} className='relative h-24 w-full'>
					<span className='absolute top-0  w-full text-center text-gray-400 -translate-y-1/2'>
						{slot}
					</span>
				</div>
			))}
		</div>
	);
}

export default CalendarContent;
