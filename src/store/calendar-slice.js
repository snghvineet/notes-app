import { createSlice } from '@reduxjs/toolkit';
import {
	MonthEnum,
	extractInfoFromDate,
} from '../components/mini-calendar/utils';

const {
	date: initDay,
	month: initMonth,
	year: initYear,
} = extractInfoFromDate(new Date());

const slice = createSlice({
	name: 'calendar',
	initialState: {
		selectedDay: { day: initDay, month: initMonth, year: initYear },
		selectedMonth: initMonth,
		selectedYear: initYear,
	},
	reducers: {
		setSelectedDay(state, { payload }) {
			console.log(payload);
			state.selectedDay = payload;
		},
		nextMonth(state) {
			const isMonthDecember = state.selectedMonth === MonthEnum.DECEMBER;
			if (isMonthDecember) state.selectedYear++;
			state.selectedMonth = isMonthDecember
				? MonthEnum.JANUARY
				: state.selectedMonth + 1;
			state.selectedDay = {
				day: 1,
				month: state.selectedMonth,
				year: state.selectedYear,
			};
		},
		prevMonth(state) {
			const isMonthJanuary = state.selectedMonth === MonthEnum.JANUARY;
			if (isMonthJanuary) state.selectedYear--;
			state.selectedMonth = isMonthJanuary
				? MonthEnum.DECEMBER
				: state.selectedMonth - 1;
			state.selectedDay = {
				day: 1,
				month: state.selectedMonth,
				year: state.selectedYear,
			};
		},
		setMonth(state, { payload }) {
			state.selectedMonth = payload;
		},
		setYear(state, { payload }) {
			state.selectedYear = payload;
		},
	},
});

const calendarReducer = slice.reducer;
export const calendarActions = slice.actions;
export default calendarReducer;
