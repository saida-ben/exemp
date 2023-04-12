import { Button ,Table,TableBody,TableCell,TableContainer,TableHead,TableRow}from '@mui/material';
const tableData=[];
function handleClick(id){
console.log('Button clicked for row with id ${id}');
}
function NavNex(){
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>
                            id
                        </TableCell>
                        <TableCell>
                            name
                        </TableCell>
                        <TableCell>
                            action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row)=>(
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell><Button variant="contained" onClick={() =>handleClick(row.id)}>
                                click me
                            </Button>
                            
                            
                            </TableCell>
                          
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default 