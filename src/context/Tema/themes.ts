import { createTheme } from '@mui/material';

const baseTheme = createTheme({
	typography: {
		fontFamily: ['JetBrains Mono', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: (themeParam) => ({
				body: {
					'&::-webkit-scrollbar, & *::-webkit-scrollbar': {
						width: 8,
						height: 8,
					},
					'&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
						background: themeParam.palette.background.paper,
					},
					'&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
						background: themeParam.palette.text.disabled,
					},
					'&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
						background: themeParam.palette.action.hover,
					},
					'& ::selection': {
						color: themeParam.palette.background.default,
						backgroundColor: themeParam.palette.text.secondary,
					},
				},
			}),
		},
	},
});

export const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
		primary: { main: '#fafafa' },
		background: {
			default: '#151515',
			paper: '#202020',
		},
	},
});

export const lightTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'light',
		primary: { main: '#202020' },
		background: {
			default: '#ffffff',
			paper: '#fafafa',
		},
	},
});
