import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    const fetchContratos = async () => {
      const response = await axios.get('http://localhost:8081/api/contratos/ultimos'); // Ajuste a URL conforme necessário
      setContratos(response.data);
    };

    fetchContratos();
  }, []);

  // Estilo para os botões
  const buttonStyle = {
    margin: '5px 0',
    fontSize: '12px',
    fontFamily: 'Roboto, sans-serif',
  };

  return (
    <Container>
      <Typography variant="h4" align="left" style={{ margin: '20px 0', fontFamily: 'Roboto, sans-serif' }}>
        KM Control
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper style={{ padding: '10px', textAlign: 'left' }}>
            <Button variant="contained" fullWidth style={buttonStyle}>Add Contrato</Button>
            <Button variant="contained" fullWidth style={buttonStyle}>Atualizar KM</Button>
            <Button variant="contained" fullWidth style={buttonStyle}>Fazer Revisão</Button>
            <Button variant="contained" fullWidth style={buttonStyle}>Substituir Veículo</Button>
            <Button variant="contained" fullWidth style={buttonStyle}>Apagar Contrato</Button>
            <Button variant="contained" fullWidth style={buttonStyle}>Histórico</Button>
          </Paper>
        </Grid>
        <Grid item xs={10} style={{ overflowX: 'auto' }}>
          <Paper style={{ padding: '20px', border: '1px solid #ddd' }}>
            <Typography variant="h6">Contratos</Typography>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Nº do Contrato</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Data Vigência</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Cond. Responsável</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Placa</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Modelo</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Média(KM)</th>
                  <th style={{ padding: '4px', fontSize: '14px' }}>Observações</th>
                </tr>
              </thead>
              <tbody>
                {contratos.map(contrato => {
                  // Define a cor de fundo com base nas condições
                  const isKmExcedido = contrato.kmExcedido;
                  const isFazerRevisao = contrato.fazerRevisao;
                  
                  const rowStyle = isKmExcedido 
                    ? { backgroundColor: '#ffcccc' } // Vermelho claro
                    : isFazerRevisao 
                      ? { backgroundColor: '#ffffcc' } // Amarelo claro
                      : { backgroundColor: '#ccffcc' }; // Verde claro

                  return (
                    <tr key={contrato.id} style={rowStyle}>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.numeroContrato}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.dataVigencia}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.condutorResponsavel}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.placa}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.modelo}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.kmMediaMensal}</td>
                      <td style={{ padding: '4px', fontSize: '12px' }}>{contrato.observacoes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
