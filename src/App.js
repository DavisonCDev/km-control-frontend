import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import ContratosTable from './components/ContratosTable';
import AddContratoModal from './components/AddContratoModal';
import Sidebar from './components/Sidebar';
import AtualizarKmModal from './components/AtualizarKmModal';
import FazerRevisaoModal from './components/FazerRevisaoModal';
import SubstituirVeiculoModal from './components/SubstituirVeiculoModal';
import ApagarContratoModal from './components/ApagarContratoModal';
import HistoricoModal from './components/HistoricoModal'; 

const App = () => {
  const [contratos, setContratos] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openRevisao, setOpenRevisao] = useState(false);
  const [openSubstituir, setOpenSubstituir] = useState(false);
  const [openApagar, setOpenApagar] = useState(false);
  const [openHistorico, setOpenHistorico] = useState(false);

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

  const [substituicaoData, setSubstituicaoData] = useState({
    numeroContrato: '',
    placa: '',
    kmInicial: 0,
    dataSubstituicao: '',
    marca: '',
    modelo: '',
  });

  const [contratoParaApagar, setContratoParaApagar] = useState({
    numeroContrato: '',
  });

  useEffect(() => {
    const fetchContratos = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
        setContratos(response.data.data || []); // Acesse a propriedade correta
      } catch (error) {
        console.error('Erro ao buscar contratos:', error);
      }
    };
    fetchContratos();
  }, []);

  // Funções de abrir e fechar modais
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpenRevisao = () => setOpenRevisao(true);
  const handleCloseRevisao = () => setOpenRevisao(false);
  const handleOpenSubstituir = () => setOpenSubstituir(true);
  const handleCloseSubstituir = () => setOpenSubstituir(false);
  const handleOpenApagar = () => setOpenApagar(true);
  const handleCloseApagar = () => setOpenApagar(false);
  const handleOpenHistorico = () => setOpenHistorico(true); 
  const handleCloseHistorico = () => setOpenHistorico(false); 

  // Funções para manipulação de dados do formulário
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

  const handleSubstituicaoChange = (e) => {
    const { name, value } = e.target;
    setSubstituicaoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApagarChange = (e) => {
    const { name, value } = e.target;
    setContratoParaApagar((prev) => ({ ...prev, [name]: value }));
  };

  // Funções para submeter os dados
  const handleSubmit = async () => {
    try {
      const contratoComDataConvertida = {
        ...newContrato,
        dataRegistro: new Date(newContrato.dataRegistro).toISOString().split('T')[0],
      };

      await axios.post('http://localhost:8081/api/contratos', contratoComDataConvertida);
      handleCloseAdd();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data || []);
    } catch (error) {
      console.error('Erro ao adicionar contrato:', error.response ? error.response.data : error.message);
    }
  };

  const handleKmSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos/atualizar-km', kmData);
      handleCloseUpdate();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data || []);
    } catch (error) {
      console.error('Erro ao atualizar KM:', error.response ? error.response.data : error.message);
    }
  };

  const handleRevisaoSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos/fazer-revisao', revisaoData);
      handleCloseRevisao();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data || []);
    } catch (error) {
      console.error('Erro ao fazer revisão:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubstituicaoSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/contratos/substituirVeiculo', substituicaoData);
      handleCloseSubstituir();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data || []);
    } catch (error) {
      console.error('Erro ao substituir veículo:', error.response ? error.response.data : error.message);
    }
  };

  const handleApagarSubmit = async () => {
    try {
      await axios.delete(`http://localhost:8081/api/contratos`, { data: contratoParaApagar });
      handleCloseApagar();
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos');
      setContratos(response.data.data || []);
    } catch (error) {
      console.error('Erro ao apagar contrato:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="left" sx={{ margin: '20px 0', fontWeight: 'bold', color: '#333', textTransform: 'uppercase' }}>
        KM Control
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Sidebar 
            handleOpen={handleOpenAdd} 
            handleUpdate={handleOpenUpdate} 
            handleRevisao={handleOpenRevisao} 
            handleSubstituir={handleOpenSubstituir} 
            handleApagar={handleOpenApagar} 
            handleHistorico={handleOpenHistorico}
          />
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
      <SubstituirVeiculoModal open={openSubstituir} handleClose={handleCloseSubstituir} handleChange={handleSubstituicaoChange} handleSubmit={handleSubstituicaoSubmit} substituicaoData={substituicaoData} />
      <ApagarContratoModal open={openApagar} handleClose={handleCloseApagar} handleChange={handleApagarChange} handleSubmit={handleApagarSubmit} contratoParaApagar={contratoParaApagar} />
      <HistoricoModal open={openHistorico} handleClose={handleCloseHistorico} contratos={contratos} />
    </Container>
  );
};

export default App;
