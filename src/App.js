// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import ContratosTable from './components/ContratosTable';
import AddContratoModal from './components/AddContratoModal';
import Sidebar from './components/Sidebar';

const App = () => {
  const [contratos, setContratos] = useState([]);
  const [open, setOpen] = useState(false);
  const [newContrato, setNewContrato] = useState({
    condutorPrincipal: '',
    condutorResponsavel: '',
    dataRegistro: '',
    diarias: 0,
    franquiaKm: 0,
    kmAtual: 0,
    kmInicial: 0,
    locadora: '',
    marca: '',
    modelo: '',
    numeroContrato: '',
    osCliente: '',
    placa: '',
    valorAluguel: 0,
  });

  useEffect(() => {
    const fetchContratos = async () => {
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    };
    fetchContratos();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContrato((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos', newContrato);
      handleClose();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error);
    }
  };

  return (
    <Container>
      <Typography 
        variant="h4" 
        align="left" 
        sx={{ 
          margin: '20px 0', 
          fontWeight: 'bold', 
          color: '#333', 
          textTransform: 'uppercase' // Transforma o texto em maiúsculas
        }}
      >
        KM Control
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Sidebar handleOpen={handleOpen} />
        </Grid>
        <Grid item xs={10} style={{ overflowX: 'auto' }}>
          <Paper style={{ padding: '10px', border: '1px solid #ddd' }}>
            <ContratosTable contratos={contratos} />
          </Paper>
        </Grid>
      </Grid>
      <AddContratoModal 
        open={open} 
        handleClose={handleClose} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        newContrato={newContrato} 
      />
    </Container>
  );
};

export default App;
