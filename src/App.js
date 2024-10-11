import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import ContratosTable from './components/ContratosTable';
import AddContratoModal from './components/AddContratoModal';
import Sidebar from './components/Sidebar';
import AtualizarKmModal from './components/AtualizarKmModal';
import FazerRevisaoModal from './components/FazerRevisaoModal'; // Importa o novo modal

const App = () => {
  const [contratos, setContratos] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openRevisao, setOpenRevisao] = useState(false); // Estado para o modal de revisão
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
  const [revisaoData, setRevisaoData] = useState({
    placa: '',
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
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpenRevisao = () => setOpenRevisao(true); // Abre o modal de revisão
  const handleCloseRevisao = () => setOpenRevisao(false); // Fecha o modal de revisão

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContrato((prev) => ({ ...prev, [name]: value }));
  };

  const handleKmChange = (e) => {
    const { name, value } = e.target;
    setKmData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRevisaoChange = (e) => {
    const { name, value } = e.target;
    setRevisaoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const contratoComDataConvertida = {
        ...newContrato,
        dataRegistro: new Date(newContrato.dataRegistro).toISOString().split('T')[0],
      };

      await axios.post('http://localhost:8081/api/contratos', contratoComDataConvertida);
      handleCloseAdd();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error.response ? error.response.data : error.message);
    }
  };

  const handleKmSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos/atualizar-km', kmData);
      handleCloseUpdate();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    } catch (error) {
      console.error('Erro ao atualizar KM:', error.response ? error.response.data : error.message);
    }
  };

  const handleRevisaoSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos/fazer-revisao', revisaoData);
      handleCloseRevisao();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data);
    } catch (error) {
      console.error('Erro ao fazer revisão:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="left" sx={{ margin: '20px 0', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}>
        KM Control
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Sidebar handleOpen={handleOpenAdd} handleUpdate={handleOpenUpdate} handleRevisao={handleOpenRevisao} />
        </Grid>
        <Grid item xs={10} style={{ overflowX: 'auto' }}>
          <Paper style={{ padding: '10px', border: '1px solid #ddd' }}>
            <ContratosTable contratos={contratos} />
          </Paper>
        </Grid>
      </Grid>
      <AddContratoModal open={openAdd} handleClose={handleCloseAdd} handleChange={handleChange} handleSubmit={handleSubmit} newContrato={newContrato} />
      <AtualizarKmModal open={openUpdate} handleClose={handleCloseUpdate} handleChange={handleKmChange} handleSubmit={handleKmSubmit} kmData={kmData} />
      <FazerRevisaoModal open={openRevisao} handleClose={handleCloseRevisao} handleChange={handleRevisaoChange} handleSubmit={handleRevisaoSubmit} revisaoData={revisaoData} />
    </Container>
  );
};

export default App;
