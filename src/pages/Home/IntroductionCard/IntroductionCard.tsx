import { Grid, Stack, Typography, useTheme } from '@mui/material';
import moment from 'moment';
import { Bm2DevSvg } from '../../../assets/svg';
import { Section } from '../../../components/Section/Section';
import useWindowSizeCustom from '../../../hooks/useWindowSizeCustom';

export function IntroductionCard() {
	const theme = useTheme();
	const { isMobile, width } = useWindowSizeCustom();

	const age = moment('2001-06-18').fromNow(true);
	const experiencePeriod = moment('2021-01-01').fromNow(true);

	return (
		<Section
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Grid container>
				<Grid item xs>
					<Typography
						variant='body1'
						fontSize={'1rem'}
						lineHeight={1}
						letterSpacing={1.5}
						fontWeight={700}
					>
						OLÁ EU SOU O GABRIEL,
					</Typography>
					<Typography
						variant={isMobile ? 'h2' : 'h1'}
						component='h1'
						fontWeight={800}
						lineHeight={1}
						sx={{ mt: 0.5, mb: 1, ml: -0.5 }}
					>
						FRONTEND
						<br />
						DEVELOPER
					</Typography>
					<Typography variant='subtitle1' letterSpacing={1.3} lineHeight={1.5} maxWidth={600}>
						Tenho {age}, possuo mais de {experiencePeriod} de experiência profissional e assim que
						entrei no mercado eu liderei o desenvolvimento do frontend de um sistema utilizado por
						mais de 50 empresas.
					</Typography>
				</Grid>
				{!isMobile && (
					<Grid item xs={4}>
						<Stack height='100%' alignItems='center' justifyContent='center'>
							<Bm2DevSvg
								size={width * 0.2}
								color={theme.palette.background.paper}
								color2={theme.palette.primary.main}
							/>
						</Stack>
					</Grid>
				)}
			</Grid>
		</Section>
	);
}
