import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './AddContratoModal.css';

const AddContratoModal = ({ open, handleClose, handleChange, handleSubmit, newContrato }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Adicionar Contrato</Typography>
        {Object.keys(newContrato).map(key => (
          <TextField
            key={key}
            name={key}
            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            fullWidth
            margin="normal"
            type={typeof newContrato[key] === 'number' ? 'number' : 'text'}
            onChange={handleChange}
          />
        ))}
        <div className="modalButtonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Salvar
          </Button>
          <Button variant="outlined" style={{ color: '#696969' }} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

export default AddContratoModal;
