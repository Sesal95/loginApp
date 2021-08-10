import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { gitHubRepos, pushPop } from '../../actions/querysActions';

const user = localStorage.getItem('user');

const Title = () => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Your Github Repos
        </Typography>
    );
}

const GitHubRepos = () => {

    const [listData, setData] = useState([]);

    useEffect(() => {
        gitHubRepos(user).then((res) => {
            const { data } = res;
            const { edges } = data;
            setData(edges);
        });
    }, []);

    const handleClick = (url) => {
        window.open(url);
    }

    const handleFavs = (nodeData) => {
        const { id, name } = nodeData;
        const data = {
            id,
            name,
            user,
            state: true,
        }
        pushPop(data).then(res => res);
    }

    return (
        <React.Fragment>
            <Title />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>SET FAVORITE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listData.map((row) => (
                        <TableRow key={row.node.id} hover={true}>
                            <TableCell>{row.node.name}</TableCell>
                            <TableCell onClick={() => handleClick(row.node.url)}>{row.node.url}</TableCell>
                            <TableCell onClick={() => handleFavs(row.node)}><FavoriteIcon/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}

export default GitHubRepos
