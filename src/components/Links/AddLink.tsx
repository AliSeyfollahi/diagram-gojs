import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { link } from '../../store/diagram/diagramSlice'
import LinkSelect from '../LinkSelect/LinkSelect';

export default function AddLink() {
  const dispatch: AppDispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { elements } = e.currentTarget
    dispatch(link({ from: +elements["from"].value, to: +elements["to"].value, }))
    handleClose()
  }

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add link
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new Link</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ margin: "1rem" }}>
                  <LinkSelect name="from" />
                </Box>
                <Box sx={{ margin: "1rem", alignItems: "center" }}>
                  To
                </Box>
                <Box sx={{ margin: "1rem" }}>
                  <LinkSelect name="to" />
                </Box>
              </Box>
              <Box sx={{ padding: "1rem 0" }}>
                <Button variant='contained' type="submit">Link</Button>
              </Box>
            </form>
          </DialogContentText>

        </DialogContent>
      </Dialog>
    </Box>
  );
}