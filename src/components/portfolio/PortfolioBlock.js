import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
    const {image, live, source, title, darkMode} = props;

    const borderColor = darkMode ? '2px solid white' : '2px solid black';

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box component={'img'} src={image} alt={'mockup'}/>
            <h1 style={{fontSize: '2rem'}}>{title}</h1>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                 alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                <Box p={1} border={borderColor} borderRadius={'25px'}>
                    <IconLink link={live} title={'Deployed'} icon={'fa fa-safari'}/>
                </Box>
                {source && (
                    <Box p={1} border={borderColor} borderRadius={'25px'}>
                        <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default PortfolioBlock;