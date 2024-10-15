import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './SubstituirVeiculoModal.css';

const SubstituirVeiculoModal = ({ open, handleClose, handleChange, handleSubmit, substituicaoData }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Substituir Veículo</Typography>
        <TextField
          name="numeroContrato"
          label="Número do Contrato"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="placa"
          label="Placa"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="kmInicial"
          label="KM Inicial"
          fullWidth
          margin="normal"
          type="number"
          onChange={handleChange}
        />
        <TextField
          name="dataSubstituicao"
          label="Data da Substituição"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <TextField
          name="marca"
          label="Marca"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="modelo"
          label="Modelo"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <div className="modalButtonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Substituir
          </Button>
          <Button variant="outlined" style={{ color: '#696969' }} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

export default SubstituirVeiculoModal;
