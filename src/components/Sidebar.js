// src/components/Sidebar.js
import React from 'react';
import { Button, Paper } from '@mui/material';
import PropTypes from 'prop-types'; 
import './Sidebar.css'; 

const Sidebar = ({ handleOpen }) => {
  return (
    <Paper className="sidebar">
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px', // Diminuir o tamanho da fonte
          padding: '4px 8px', // Diminuir o padding para reduzir o tamanho do botão
        }}
        onClick={handleOpen}
      >
        Add Contrato
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px',
          padding: '4px 8px',
        }}
      >
        Atualizar KM
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px',
          padding: '4px 8px',
        }}
      >
        Fazer Revisão
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px',
          padding: '4px 8px',
        }}
      >
        Substituir Veículo
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px',
          padding: '4px 8px',
        }}
      >
        Apagar Contrato
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          margin: '5px 0',
          fontSize: '10px',
          padding: '4px 8px',
        }}
      >
        Histórico
      </Button>
    </Paper>
  );
};

// Definindo as propTypes
Sidebar.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default Sidebar;
