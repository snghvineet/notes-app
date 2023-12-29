import { useDispatch, useSelector } from 'react-redux';
import DateTag from './DateTag';
import { days } from './util';
import { getWeekSpan } from '../mini-calendar/utils';
import { calendarActions } from '../../store/calendar-slice';

export default function CalendarSpanner({ year, month, selectedDay }) {
	const dispatch = useDispatch();

	function selectDateHandler(day, month, year) {
		dispatch(calendarActions.setSelectedDay({ day, month, year }));
	}

	const weekSpanData = getWeekSpan(selectedDay.day, month, year);
	const weekSpanComponent = weekSpanData.map((date, index) => {
		const isSelected =
			date === selectedDay.day &&
			month === selectedDay.month &&
			year === selectedDay.year;
		return (
			<DateTag
				key={days[index] + date}
				day={days[index]}
				date={date}
				selected={isSelected}
				onClick={selectDateHandler.bind(null, date, month, year)}
			/>
		);
	});

	return (
		<div className='flex justify-center items-center gap-3 px-6'>
			<div className='flex justify-center items-center rotate-180 w-16 rounded-xl h-20 bg-black/15 backdrop-blur'>
				<span className='vertical-rl'>
					<span className='text-xs'>GMT </span>
					<span className='font-medium'></span>
				</span>
			</div>
			<div className='grid grid-cols-7 flex-grow pr-8 pl-2'>
				{weekSpanComponent}
			</div>
		</div>
	);
}
