import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './FazerRevisaoModal.css';

const FazerRevisaoModal = ({ open, handleClose, handleChange, handleSubmit, revisaoData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Fazer Revisão</Typography>
        <TextField
          name="placa"
          label="Placa"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <div className="modalButtonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Confirmar
          </Button>
          <Button variant="outlined" style={{ color: '#696969' }} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

export default FazerRevisaoModal;
