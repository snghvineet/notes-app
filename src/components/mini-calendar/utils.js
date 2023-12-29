export const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
days[1] = leapYear(new Date().getFullYear()) ? 29 : 28;

export const monthsFullName = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'Novemeber',
	'December',
];

export const MonthEnum = {
	JANUARY: 0,
	FEBRUARY: 1,
	MARCH: 2,
	APRIL: 3,
	MAY: 4,
	JUNE: 5,
	JULY: 6,
	AUGUST: 7,
	SEPTEMBER: 8,
	OCTOBER: 9,
	NOVEMBER: 10,
	DECEMBER: 11,
};

export function getDaysArray(month, year) {
	const date = new Date(year, month);
	const { day } = extractInfoFromDate(date);
	const paddings = [6, 0, 1, 2, 3, 4, 5];
	const prevMonthDays = month > 0 ? days[month - 1] : days[11];
	const currentMonthDays = days[month];
	let res = [];
	for (let i = prevMonthDays - paddings[day]; i < prevMonthDays; i++) {
		res.push(i + 1);
	}
	res = res.concat([...Array(currentMonthDays + 1).keys()].splice(1));
	const right = res.length;
	for (let i = 1; res.length > 35 && res.length < 42; i++) res.push(i);

	return { res, leftMark: paddings[day] - 1, rightMark: right };
}

export function getWeekSpan(date, month, year) {
	const daysData = getDaysArray(month, year);
	const dateIndex = date + daysData.leftMark;
	const weekStart = 7 * Math.floor(dateIndex / 7);

	return daysData.res.slice(weekStart, weekStart + 7);
}

export function extractInfoFromDate(date) {
	return {
		day: date.getDay(),
		date: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	};
}

export function leapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
