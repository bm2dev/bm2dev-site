import { ReactNode, createContext, useContext, useState } from 'react';
//
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from './themes';

interface TemaContextTypes {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export const TemaContext = createContext<TemaContextTypes>({} as TemaContextTypes);

export const useTema = () => useContext(TemaContext);

export default function TemaProvider({ children }: { children: ReactNode }) {
	const startInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [darkMode, setDarkMode] = useState(startInDarkMode); // Tá Invertido

	const toggleDarkMode = () => setDarkMode((p) => !p);

	return (
		<TemaContext.Provider value={{ darkMode, toggleDarkMode }}>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</TemaContext.Provider>
	);
}
