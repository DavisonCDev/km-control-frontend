// src/components/HistoricoModal.js
import React, { useEffect, useState } from 'react';
import { Modal, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import './HistoricoModal.css';

const HistoricoModal = ({ open, handleClose }) => {
    const [contratos, setContratos] = useState([]);

    useEffect(() => {
        const fetchContratos = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/contratos');
                setContratos(response.data);
            } catch (error) {
                console.error('Erro ao buscar contratos:', error);
            }
        };

        if (open) {
            fetchContratos();
        }
    }, [open]);

    return (
        <Modal open={open} onClose={handleClose}>
            <Paper style={{ padding: '20px', maxHeight: '80%', overflowY: 'auto', margin: 'auto', marginTop: '5%' }}>
                <IconButton onClick={handleClose} style={{ float: 'right' }}>
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" align="center" gutterBottom>
                    Histórico de Registros
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Condutor Principal</TableCell>
                                <TableCell>Condutor Responsável</TableCell>
                                <TableCell>Data Atual</TableCell>
                                <TableCell>Data Registro</TableCell>
                                <TableCell>Data Vigência</TableCell>
                                <TableCell>Data Substituição</TableCell>
                                <TableCell>Diárias</TableCell>
                                <TableCell>Franquia KM</TableCell>
                                <TableCell>KM Atual</TableCell>
                                <TableCell>KM Inicial</TableCell>
                                <TableCell>Locadora</TableCell>
                                <TableCell>Marca</TableCell>
                                <TableCell>Modelo</TableCell>
                                <TableCell>Número Contrato</TableCell>
                                <TableCell>OS Cliente</TableCell>
                                <TableCell>Placa</TableCell>
                                <TableCell>Valor Aluguel</TableCell>
                                <TableCell>Fazer Revisão</TableCell>
                                <TableCell>KM Excedido</TableCell>
                                <TableCell>KM Ideal</TableCell>
                                <TableCell>KM Semana</TableCell>
                                <TableCell>KM Média Mensal</TableCell>
                                <TableCell>Qt Meses Veículo</TableCell>
                                <TableCell>Qt Meses Contrato</TableCell>
                                <TableCell>Saldo KM</TableCell>
                                <TableCell>Acumulado Mês</TableCell>
                                <TableCell>Entrega Propriedade Data</TableCell>
                                <TableCell>Contador Revisão</TableCell>
                                <TableCell>Observações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contratos.map((contrato) => (
                                <TableRow key={contrato.id}>
                                    <TableCell>{contrato.id}</TableCell>
                                    <TableCell>{contrato.condutorPrincipal}</TableCell>
                                    <TableCell>{contrato.condutorResponsavel}</TableCell>
                                    <TableCell>{contrato.dataAtual}</TableCell>
                                    <TableCell>{contrato.dataRegistro}</TableCell>
                                    <TableCell>{contrato.dataVigencia}</TableCell>
                                    <TableCell>{contrato.dataSubstituicao}</TableCell>
                                    <TableCell>{contrato.diarias}</TableCell>
                                    <TableCell>{contrato.franquiaKm}</TableCell>
                                    <TableCell>{contrato.kmAtual}</TableCell>
                                    <TableCell>{contrato.kmInicial}</TableCell>
                                    <TableCell>{contrato.locadora}</TableCell>
                                    <TableCell>{contrato.marca}</TableCell>
                                    <TableCell>{contrato.modelo}</TableCell>
                                    <TableCell>{contrato.numeroContrato}</TableCell>
                                    <TableCell>{contrato.osCliente}</TableCell>
                                    <TableCell>{contrato.placa}</TableCell>
                                    <TableCell>{contrato.valorAluguel}</TableCell>
                                    <TableCell>{contrato.fazerRevisao ? 'Sim' : 'Não'}</TableCell>
                                    <TableCell>{contrato.kmExcedido ? 'Sim' : 'Não'}</TableCell>
                                    <TableCell>{contrato.kmIdeal}</TableCell>
                                    <TableCell>{contrato.kmSemana}</TableCell>
                                    <TableCell>{contrato.kmMediaMensal}</TableCell>
                                    <TableCell>{contrato.qtMesesVeic}</TableCell>
                                    <TableCell>{contrato.qtMesesCont}</TableCell>
                                    <TableCell>{contrato.saldoKm}</TableCell>
                                    <TableCell>{contrato.acumuladoMes}</TableCell>
                                    <TableCell>{contrato.entregaPropData}</TableCell>
                                    <TableCell>{contrato.contadorRevisao}</TableCell>
                                    <TableCell>{contrato.observacoes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Modal>
    );
};

export default HistoricoModal;
