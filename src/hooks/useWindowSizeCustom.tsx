import { useWindowSize } from 'usehooks-ts';

export default function useWindowSizeCustom() {
	const { width, height } = useWindowSize();

	const isMobile = width <= 768;

	return { isMobile, width, height };
}
