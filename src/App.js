import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    const fetchContratos = async () => {
      const response = await axios.get('/api/contratos/ultimos'); // Ajuste a URL conforme necessário
      setContratos(response.data);
    };

    fetchContratos();
  }, []);

  return (
    <Container>
      <Typography variant="h2" align="center" style={{ margin: '20px 0', fontFamily: 'cursive' }}>
        KM Control
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper style={{ padding: '20px' }}>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 1</Button>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 2</Button>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 3</Button>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 4</Button>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 5</Button>
            <Button variant="contained" fullWidth style={{ margin: '10px 0' }}>Botão 6</Button>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h4">Últimos Contratos</Typography>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Número do Contrato</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Condutor Principal</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px' }}>Data Vigência</th>
                  {/* Adicione mais colunas conforme necessário */}
                </tr>
              </thead>
              <tbody>
                {contratos.map(contrato => (
                  <tr key={contrato.id}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contrato.numeroContrato}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contrato.condutorPrincipal}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{contrato.dataVigencia}</td>
                    {/* Adicione mais células conforme necessário */}
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;