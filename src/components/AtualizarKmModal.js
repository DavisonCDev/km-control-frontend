import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './AtualizarKmModal.css';

const AtualizarKmModal = ({ open, handleClose, handleChange, handleSubmit, kmData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Atualizar KM</Typography>
        <TextField
          name="placa"
          label="Placa"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="kmAtual"
          label="KM Atual"
          type="number"
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

export default AtualizarKmModal;
