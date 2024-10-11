// src/components/ContratosTable.js
import React from 'react';
import './ContratosTable.css'; // Importa o arquivo CSS

const ContratosTable = ({ contratos }) => {
  if (!contratos || contratos.length === 0) return <p>Nenhum contrato encontrado.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nº do Contrato</th>
          <th>Data Vigência</th>
          <th>Cond. Responsável</th>
          <th>Placa</th>
          <th>Modelo</th>
          <th>Média(KM)</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>
        {contratos.map(contrato => {
          const isKmExcedido = contrato.kmExcedido;
          const isFazerRevisao = contrato.fazerRevisao;

          const rowStyle = isKmExcedido
            ? { backgroundColor: '#ffcccc' }
            : isFazerRevisao
              ? { backgroundColor: '#ffffcc' }
              : { backgroundColor: '#ccffcc' };

          return (
            <tr key={contrato.id} style={rowStyle}>
              <td>{contrato.numeroContrato}</td>
              <td>{contrato.dataVigencia}</td>
              <td>{contrato.condutorResponsavel}</td>
              <td>{contrato.placa}</td>
              <td>{contrato.modelo}</td>
              <td>{contrato.kmMediaMensal}</td>
              <td>{contrato.observacoes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContratosTable;
