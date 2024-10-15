// src/components/ApagarContratoModal.js
import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './ApagarContratoModal.css';

const ApagarContratoModal = ({ open, handleClose, handleChange, handleSubmit, contratoData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Apagar Contrato</Typography>
        <TextField
          name="numeroContrato"
          label="Número do Contrato"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <div className="modalButtonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Apagar
          </Button>
          <Button variant="outlined" style={{ color: '#696969' }} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

export default ApagarContratoModal;
