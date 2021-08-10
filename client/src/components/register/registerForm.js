import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ModalContext from '../../contexts/modalContext';
import { registerUser } from '../../actions/userActions';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                HelloBuild Github Repos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const RegisterForm = () => {
    const classes = useStyles();

    const { dispatchModal } = useContext(ModalContext);

    const [formData, setFormData] = useState({
        name: '',
        user: '',
        password: '',
        password2: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const renderResponse = (data) => {
        const { success, error = '' } = data;
        if (success) {
            setTimeout(function(){window.location.pathname = "/signin"} , 2000);
        }
        dispatchModal({
            show: true,
            text: error,
            typeMsg: 'Warning',
        })
    }

    const validateForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(formData);
        console.log(data);
        renderResponse(data);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus

                                type='text'
                                name='name'
                                onChange={handleInputChange}
                                className='form-register-control'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="user"
                                label="Github User"
                                autoComplete="lname"

                                type='text'
                                name='user'
                                onChange={handleInputChange}
                                className='form-register-control'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Password"
                                id="password"
                                autoComplete="current-password"

                                type='password'
                                name='password'
                                onChange={handleInputChange}
                                className='form-register-control'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Confirm Password"
                                id="password"
                                autoComplete="current-password"

                                type='password'
                                name='password2'
                                onChange={handleInputChange}
                                className='form-register-control'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                        onClick={(e) => validateForm(e)}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default RegisterForm;
