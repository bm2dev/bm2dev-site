import { Box, BoxProps, Container } from '@mui/material';

interface SectionProps extends BoxProps {}

export function Section({ sx, children }: SectionProps) {
	return (
		<Box sx={{ py: 10, bgcolor: 'background.paper', ...sx }}>
			<Container>{children}</Container>
		</Box>
	);
}
