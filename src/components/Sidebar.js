// src/components/Sidebar.js
import React from 'react';
import { Button, Paper } from '@mui/material';
import './Sidebar.css';

const Sidebar = ({ handleOpen, handleUpdate, handleRevisao, handleSubstituir, handleApagar, handleHistorico }) => {
  return (
    <Paper className="sidebar">
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '10px 0', width: '100%' }} 
        onClick={handleOpen}
      >
        Add Contrato
      </Button>
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '6px 0', width: '100%' }} 
        onClick={handleUpdate}
      >
        Atualizar KM
      </Button>
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '6px 0', width: '100%' }}
        onClick={handleRevisao}
      >
        Fazer Revisão
      </Button>
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '6px 0', width: '100%' }}
        onClick={handleSubstituir}
      >
        Substituir Veículo
      </Button>
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '6px 0', width: '100%' }}
        onClick={handleApagar}
      >
        Apagar Contrato
      </Button>
      <Button 
        variant="contained" 
        sx={{ fontSize: '10px', padding: '6px', margin: '6px 0', width: '100%' }}
        onClick={handleHistorico}
      >
        Histórico
      </Button>
    </Paper>
  );
};

export default Sidebar;
