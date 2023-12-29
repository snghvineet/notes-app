import { useDispatch, useSelector } from 'react-redux';
import CalendarSpanner from './CalendarSpanner';
import CalendarContent from './CalendarContent';
import CalendarHeader from './CalendarHeader';

function Calendar() {
	const month = useSelector((state) => state.calendar.selectedMonth);
	const year = useSelector((state) => state.calendar.selectedYear);
	const selectedDay = useSelector((state) => state.calendar.selectedDay);
	return (
		<div className='w-full h-full flex flex-col bg-center bg-cover bg-no-repeat bg-backdrop rounded-3xl'>
			<CalendarHeader month={month} selectedDay={selectedDay} year={year} />
			<CalendarSpanner month={month} selectedDay={selectedDay} year={year} />
			<CalendarContent />
		</div>
	);
}

export default Calendar;
