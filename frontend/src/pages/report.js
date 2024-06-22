import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiGamepadVariant } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';
import { mdiMonitorCellphone } from '@mdi/js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Report() {
  return (
  
    <div className="App">
    <div><h1>Criar Relatório</h1>
      <h2>Selecione o modelo</h2>
      <div className="search-bar">
      </div>
      <div className="card-container">
        <Card
          title="Card 1"
          image="https://via.placeholder.com/200"
          subtitle="Subtítulo do Card 1"
        />
        <Card
          title="Card 2"
          image="https://via.placeholder.com/200"
          subtitle="Subtítulo do Card 2"
        />
        <Card
          title="Card 3"
          image="https://via.placeholder.com/200"
          subtitle="Subtítulo do Card 3"
        />
        <Card
          title="Card 4"
          image="https://via.placeholder.com/200"
          subtitle="Subtítulo do Card 4"
        />
      </div>
    </div>
    </div>
  );
}

function Card({ title, image, subtitle }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default Report;