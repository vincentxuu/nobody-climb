import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonLeft from '../../assets/photo/personleft.jpeg';
import PersonMid from '../../assets/photo/personmid.jpeg';
import PersonRight from '../../assets/photo/personright.jpeg';
import { ReactComponent as ArrowRightCircle } from '../../assets/icon/arrow-right-circled.svg';

const PersonCardWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 767px) {
		//width: 60%;
	}
`;
const PersonCardLeft = styled.div`
	padding: 10px 20px 10px 20px;
`;
const PersonCardMid = styled.div`
	padding: 10px 20px 10px 20px;
	@media (max-width: 767px) {
		//padding:20px 0px 20px 0px ;
	}
`;
const PersonCardRight = styled.div`
	padding: 10px 20px 10px 20px;
`;

const CardContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const CardContentZone = styled.div``;

const PersonCard = () => {
	return (
		<PersonCardWrapper>
			<PersonCardLeft>
				<Card sx={{ maxWidth: 360 }}>
					<CardMedia sx={{ height: 248 }} image={PersonLeft} title='green iguana' />
					<CardContent>
						<CardContentWrapper>
							<CardContentZone>
								<Typography gutterBottom variant='h1' component='div' sx={{ fontSize: '26px' }}>
									謝璿
								</Typography>
								<Typography variant='subtitle1' color='#8E8C8C'>
									攀岩年資 | 3年
								</Typography>
							</CardContentZone>
							<ArrowRightCircle />
						</CardContentWrapper>
						<Typography variant='body1' color='#1B1A1A'>
							攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
						</Typography>
					</CardContent>
				</Card>
			</PersonCardLeft>
			<PersonCardMid>
				<Card sx={{ maxWidth: 360 }}>
					<CardMedia sx={{ height: 248 }} image={PersonMid} title='green iguana' />
					<CardContent>
						<CardContentWrapper>
							<CardContentZone>
								<Typography gutterBottom variant='h1' component='div' sx={{ fontSize: '26px' }}>
									奇瑋
								</Typography>
								<Typography variant='subtitle1' color='#8E8C8C'>
									攀岩年資 | 3年
								</Typography>
							</CardContentZone>
							<ArrowRightCircle />
						</CardContentWrapper>
						<Typography variant='body1' color='#1B1A1A'>
							攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
						</Typography>
					</CardContent>
				</Card>
			</PersonCardMid>
			<PersonCardRight>
				<Card sx={{ maxWidth: 360 }}>
					<CardMedia sx={{ height: 248 }} image={PersonRight} title='green iguana' />
					<CardContent>
						<CardContentWrapper>
							<CardContentZone>
								<Typography gutterBottom variant='h1' component='div' sx={{ fontSize: '26px' }}>
									小若
								</Typography>
								<Typography variant='subtitle1' color='#8E8C8C'>
									攀岩年資 | 3年
								</Typography>
							</CardContentZone>
							<ArrowRightCircle />
						</CardContentWrapper>
						<Typography variant='body1' color='#1B1A1A'>
							攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
						</Typography>
					</CardContent>
				</Card>
			</PersonCardRight>
		</PersonCardWrapper>
	);
};

export default PersonCard;
