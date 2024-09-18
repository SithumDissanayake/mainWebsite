import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import flowCoding from '../assets/flowcoding.png';
import studentsChoice from '../assets/studentsChoice.png';
import me from '../assets/me.jpg';
import left from '../assets/left.png';
import right from '../assets/right.png';
import Button from "@mui/material/Button";

const cardData = [
    {
        img: studentsChoice,
        title: 'Students Choice',
        link: 'https://studentschoice.blog/',
        description:
            'Students Choice is an online platform designed for university students to rate and review aspects of their university experience, including courses, accommodation, and career pathways. It also features a forum where students can post blogs and ask questions about university life. The platform aims to improve the quality of life for both current and future students. This semester, the focus is on building the forum and Q&A system, updating the website, refactoring the codebase, and optimizing scalability using React. Marketing efforts will include campus events, in-class promotions, and Google ads.',
    },
    {
        img: flowCoding,
        title: 'Flow Coding',
        link: 'https://flowcoding.sithumd.com/',
        description:
            'Flow Coding is an platform designed to teach users the fundamentals of HTML and CSS, empowering them to build and style their own websites. Through step-by-step tutorials and activities, users can learn how to create responsive, visually appealing web pages from scratch.',
    },
];


const SyledCard = styled(Card)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: '#DEC1FF',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export function Search() {
    return (
        <FormControl sx={{width: {xs: '100%', md: '25ch'}}} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{flexGrow: 1}}
                startAdornment={
                    <InputAdornment position="start" sx={{color: 'text.primary'}}>
                        <SearchRoundedIcon fontSize="small"/>
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

const randomPosition = (offset = 15) => {
    return Math.random() * (80 - offset * 2) + offset;
};

export default function MainContent() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const leftImageTop = randomPosition();
    const rightImageTop = randomPosition();

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}} >
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    backgroundColor: '',

                }}
            >
                {/* Contact Me Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{position: 'absolute', top: 16, right: 16}}
                    href="mailto:contact@sithumd.com?subject=🖐️ Hi Sithum, I'd like to hire you!"
                >
                    Contact Me
                </Button>

                {/* Left Image */}
                <Box
                    component="img"
                    src={left} // Replace with your desired image
                    alt="Left Image"
                    sx={{
                        position: 'absolute',
                        left: 16,
                        top: `${leftImageTop}%`,
                        transform: 'translateY(-50%)',
                        width: '20%',
                        borderRadius: '8px',
                    }}
                />

                {/* Right Image */}
                <Box
                    component="img"
                    src={right} // Replace with your desired image
                    alt="Right Image"
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: `${rightImageTop}%`,
                        transform: 'translateY(-50%)',
                        width: '20%',
                        borderRadius: '8px',
                    }}
                />

                {/* Centered Image with Blue Border */}
                <Box
                    component="img"
                    src={me} // You can replace with your desired image
                    alt="Centered Image"
                    sx={{
                        width: {xs: '80%', md: '40%'},
                        border: '20px solid',
                        borderColor: '#5CC8FF',
                        borderRadius: '50%',
                        marginTop: -15,
                        marginBottom: 5,
                    }}
                />


                {/* Quote Section */}
                <Typography variant="h5" gutterBottom >
                    "Hi there! My name is <u>Sithum Dissanayake</u>. I'm full time University student pursuing a degree in Bachelor of Engineering in Software Engineering (Honours) at the Australian National University while being a part-time/full-time Technical Consultant with lots of infrastructure knowledge and I love to learn! Please see some of my projects below! "
                </Typography>
            </Box>

            <Box
                sx={{
                    backgroundColor: '#7D70BA', // Set your desired background color here
                    borderRadius: '16px', // Set your desired border-radius here
                    padding: 2, // Optional: Add some padding around the content
                    boxShadow: 5, // Optional: Add shadow for a bit of depth
                }}
            >
            <div>
                <Typography variant="h2" gutterBottom style={{ color: 'white' }}>
                    Latest Projects!
                </Typography>

                {/*<Typography>Stay in the loop with the latest about our products</Typography>*/}
            </div>
            <Box
                sx={{
                    display: {xs: 'flex', sm: 'none'},
                    flexDirection: 'row',
                    gap: 1,
                    width: {xs: '100%', md: 'fit-content'},
                    overflow: 'auto',
                }}
            >
                <Search/>
                <IconButton size="small" aria-label="RSS feed">
                    <RssFeedRoundedIcon/>
                </IconButton>
            </Box>
            <Grid container spacing={2} columns={12}>
                <Grid size={{xs: 12, md: 6}}>
                    <a href={cardData[0].link} target="_blank" rel="noopener noreferrer"
                       style={{textDecoration: 'none'}}>

                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(0)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[0].img}
                                aspect-ratio="16 / 9"
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <SyledCardContent>
                                {/*<Typography gutterBottom variant="caption" component="div">*/}
                                {/*    {cardData[0].tag}*/}
                                {/*</Typography>*/}
                                <Typography gutterBottom variant="h6" component="div">
                                    {cardData[0].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {cardData[0].description}
                                </StyledTypography>
                            </SyledCardContent>
                            {/*<Author authors={cardData[0].authors}/>*/}
                        </SyledCard>
                    </a>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <a href={cardData[1].link} target="_blank" rel="noopener noreferrer"
                       style={{textDecoration: 'none'}}>

                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(1)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[1].img}
                                aspect-ratio="16 / 9"
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <SyledCardContent>
                                {/*<Typography gutterBottom variant="caption" component="div">*/}
                                {/*    {cardData[1].tag}*/}
                                {/*</Typography>*/}
                                <Typography gutterBottom variant="h6" component="div">
                                    {cardData[1].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {cardData[1].description}
                                </StyledTypography>
                            </SyledCardContent>
                            {/*<Author authors={cardData[1].authors}/>*/}
                        </SyledCard>
                    </a>
                </Grid>
            </Grid>
            </Box>
        </Box>

);
}
