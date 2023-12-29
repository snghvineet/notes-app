import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IconButton } from '../ui/Buttons';
import DateTile from './DateTile';
import WeekDay from './WeekDayTile';
import { extractInfoFromDate, getDaysArray, monthsFullName } from './utils';
import { SidebarContainer } from '../ui/Layouts';
import { calendarActions } from '../../store/calendar-slice';

const today = new Date();
const {
	date: todaysDay,
	month: todaysMonth,
	year: todaysYear,
} = extractInfoFromDate(today);

const weeks = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function MiniCalendar() {
	const month = useSelector((state) => state.calendar.selectedMonth);
	const year = useSelector((state) => state.calendar.selectedYear);
	const selectedDay = useSelector((state) => state.calendar.selectedDay);
	const dispatch = useDispatch();

	function showNextMonth() {
		dispatch(calendarActions.nextMonth());
	}

	function showPrevMonth() {
		dispatch(calendarActions.prevMonth());
	}

	function selectDateHandler(day, month, year) {
		dispatch(calendarActions.setSelectedDay({ day, month, year }));
	}

	const header = `${monthsFullName[month]} ${year}`;
	const daysData = getDaysArray(month, year);
	const dateTiles = daysData.res.map((date, index) => {
		const dayIndex = daysData.leftMark + selectedDay.day;
		const isSelected =
			dayIndex === index &&
			selectedDay.month === month &&
			selectedDay.year === year;

		const isNotPartOfSelectedMonth =
			index <= daysData.leftMark || index >= daysData.rightMark;

		const todaysDayIndex = todaysDay + daysData.leftMark;

		const isToday =
			todaysDayIndex === index && month === todaysMonth && year === todaysYear;

		return (
			<DateTile
				date={date}
				key={index}
				inactive={isNotPartOfSelectedMonth}
				selected={isSelected}
				today={isToday}
				onTap={selectDateHandler.bind(null, date, month, year)}
			/>
		);
	});

	return (
		<SidebarContainer>
			<div className='flex justify-between mb-3 items-center px-6'>
				<h1 className='font-bold tracking-wider'>{header}</h1>
				<div className='flex items-center gap-3'>
					<IconButton onClick={showPrevMonth}>
						<IoIosArrowBack className='text-xl' />
					</IconButton>
					<IconButton onClick={showNextMonth}>
						<IoIosArrowForward className='text-xl' />
					</IconButton>
				</div>
			</div>
			<div className='w-full px-4'>
				<div className='grid grid-cols-7 mb-1'>
					{weeks.map((day) => (
						<WeekDay day={day} key={day} />
					))}
				</div>
				<div className='grid grid-cols-7'>{dateTiles}</div>
			</div>
		</SidebarContainer>
	);
}

export default MiniCalendar;
