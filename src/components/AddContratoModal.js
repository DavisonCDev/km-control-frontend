// src/components/AddContratoModal.js
import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './AddContratoModal.css';

const AddContratoModal = ({ open, handleClose, handleChange, handleSubmit, newContrato }) => {
  const handleFormSubmit = () => {
    const contratoToSubmit = { ...newContrato }; // Cria uma cópia

    // Verifica se a data existe e converte
    if (contratoToSubmit.data) {
      const [day, month, year] = contratoToSubmit.data.split('/');
      if (day && month && year) {
        const formattedDate = `${year}-${month}-${day}`; // Formato aaaa-MM-dd
        contratoToSubmit.data = formattedDate; // Atualiza o campo de data
      } else {
        console.error("Formato de data inválido:", contratoToSubmit.data); // Log de erro se o formato for inválido
        return; // Impede o envio se a data for inválida
      }
    }

    handleSubmit(contratoToSubmit); // Chama o handleSubmit com o contrato formatado
  };

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
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
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
