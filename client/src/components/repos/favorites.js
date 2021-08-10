import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { mongoRepos } from '../../actions/querysActions';

const user = localStorage.getItem('user');

const Title = () => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Your Favorite Repos
        </Typography>
    );
}

const FavRepos = () => {

    const [listData, setData] = useState([]);

    useEffect(() => {
        mongoRepos(user).then((res) => {
            const { data } = res;
            setData(data);
        });
    }, []);

    const handleClick = (url) => {
        window.open(url);
    }

    return (
        <React.Fragment>
            <Title />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listData.map((row) => (
                            <TableRow key={row.id} hover={true} onClick={() => handleClick(row.url)}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.url}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default FavRepos
