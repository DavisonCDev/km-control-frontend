// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import ContratosTable from './components/ContratosTable';
import AddContratoModal from './components/AddContratoModal';
import Sidebar from './components/Sidebar';
import AtualizarKmModal from './components/AtualizarKmModal'; // Importa o novo modal

const App = () => {
  const [contratos, setContratos] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false); // Estado para o modal de atualização
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
  const [kmData, setKmData] = useState({
    placa: '',
    kmAtual: 0,
  });

  useEffect(() => {
    const fetchContratos = async () => {
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    };
    fetchContratos();
  }, []);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenUpdate = () => setOpenUpdate(true); // Abre o modal de atualização
  const handleCloseUpdate = () => setOpenUpdate(false); // Fecha o modal de atualização

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContrato((prev) => ({ ...prev, [name]: value }));
  };

  const handleKmChange = (e) => {
    const { name, value } = e.target;
    setKmData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos', newContrato);
      handleCloseAdd();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error);
    }
  };

  const handleKmSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/atualizar-km', kmData);
      handleCloseUpdate();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data); // Recarrega a lista de contratos
    } catch (error) {
      console.error('Erro ao atualizar KM:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="left" sx={{ margin: '20px 0', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}>
        KM Control
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Sidebar handleOpen={handleOpenAdd} handleUpdate={handleOpenUpdate} /> {/* Passa a função de abrir o modal */}
        </Grid>
        <Grid item xs={10} style={{ overflowX: 'auto' }}>
          <Paper style={{ padding: '10px', border: '1px solid #ddd' }}>
            <ContratosTable contratos={contratos} />
          </Paper>
        </Grid>
      </Grid>
      <AddContratoModal open={openAdd} handleClose={handleCloseAdd} handleChange={handleChange} handleSubmit={handleSubmit} newContrato={newContrato} />
      <AtualizarKmModal open={openUpdate} handleClose={handleCloseUpdate} handleChange={handleKmChange} handleSubmit={handleKmSubmit} kmData={kmData} /> {/* Novo modal */}
    </Container>
  );
};

export default App;
