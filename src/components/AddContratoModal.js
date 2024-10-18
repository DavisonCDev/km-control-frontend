import React from 'react';
import { Modal, Paper, Typography, TextField, Button } from '@mui/material';
import './AddContratoModal.css';

const AddContratoModal = ({ open, handleClose, handleChange, handleSubmit, newContrato }) => {
  const handleFormSubmit = () => {
    const contratoToSubmit = { ...newContrato }; // Cria uma cópia

    // Verifica se a data existe e converte (se necessário)
    if (contratoToSubmit.data) {
      const [day, month, year] = contratoToSubmit.data.split('/');
      if (day && month && year) {
        const formattedDate = `${year}-${month}-${day}`; // Formato aaaa-MM-dd
        contratoToSubmit.data = formattedDate; // Atualiza o campo de data
      } else {
        console.error("Formato de data inválido:", contratoToSubmit.data);
        return;
      }
    }

    handleSubmit(contratoToSubmit); // Chama o handleSubmit com o contrato formatado
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper className="modalPaper">
        <Typography variant="h6">Adicionar Contrato</Typography>
        <TextField
          name="condutorPrincipal"
          label="Condutor Principal"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="condutorResponsavel"
          label="Condutor Responsável"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="dataRegistro"
          label="Data de Registro"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
        <TextField
          name="diarias"
          label="Diárias"
          fullWidth
          margin="normal"
          type="number"
          onChange={handleChange}
        />
        <TextField
          name="franquiaKm"
          label="Franquia KM"
          fullWidth
          margin="normal"
          type="number"
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
          name="kmAtual"
          label="KM Atual"
          fullWidth
          margin="normal"
          type="number"
          onChange={handleChange}
        />
        <TextField
          name="locadora"
          label="Locadora"
          fullWidth
          margin="normal"
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
        <TextField
          name="numeroContrato"
          label="Número de Contrato"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          name="osCliente"
          label="OS Cliente"
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
          name="valorAluguel"
          label="Valor de Aluguel"
          fullWidth
          margin="normal"
          type="number"
          onChange={handleChange}
        />
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
