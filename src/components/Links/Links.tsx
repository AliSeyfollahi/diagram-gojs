import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Label from './Label'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { unlink } from '../../store/diagram/diagramSlice'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { linkRow } from './types'

const Links = () => {

  const diagram = useSelector((state: RootState) => state.diagram)
  const dispatch: AppDispatch = useDispatch()

  const handleRemove = (row: linkRow) => {
    dispatch(unlink(row))
  }

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ width: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell></TableCell>
            <TableCell>To</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diagram.linkDataArray.map((row: linkRow) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Label lKey={row.from} />
              </TableCell>
              <TableCell align="center"><ArrowRightAltIcon /></TableCell>
              <TableCell><Label lKey={row.to} /></TableCell>
              <TableCell>
                <IconButton color="error" onClick={handleRemove.bind(null, row)} size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton >
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}

export default Links;