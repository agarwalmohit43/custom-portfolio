import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { HeaderType } from '../../../data/portfolioTypes'

const logo = require('../../../assest/images/logo.png')



const Header = ({ homepage, title }: HeaderType) => {


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, height: '4rem' }}
                    >
                        <img src={logo} alt='logo' />
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
