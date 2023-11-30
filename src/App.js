// src/App.js

import React from 'react';
import './App.css';

function App() {
  const datosPersonales = {
    nombre: 'Juan Carlos Fonseca Romero',
    ocupacion: 'Estudiante de Ingeniería en Sistemas',
    email: 'juancfonsecar@gmail.com',
    telefono: '3213879069',
    edad: 20,
    nacionalidad: 'Colombia',
  };

  const perfil = `Soy un estudiante de Ingeniería en Sistemas, me encuentro cursando séptimo semestre, 
                 me apasiona la tecnología y su constante desarrollo. Mi interés en la tecnología se traduce 
                 en un compromiso continuo por mantenerme al día con los avances en el campo de la informática. 
                 Mi objetivo es convertir mi gusto en una carrera sólida en el campo. Me encuentro en la búsqueda 
                 de oportunidades que me permitan seguir aprendiendo y aplicando mis conocimientos de manera 
                 polivalente, efectiva y acertada.`;

  const estudios = [
    { tipo: 'Estudios Primarios', año: 2013, institucion: 'Jaime Hernando Garzón' },
    { tipo: 'Estudios Secundarios', año: 2019, institucion: 'Jaime Hernando Garzón Forero' },
    { tipo: 'Universitarios', año: 2023, institucion: 'Universidad el Bosque', detalle: 'Séptimo semestre (nocturno)' },
  ];

  const cursos = [
    { nombre: 'MÁSTER EN JAVA', plataforma: 'UDEMY', duracion: '127Hrs' },
    { nombre: 'AMERICAN SCHOOL WAY - ACTUAL', nivel: 'A1' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="contact-section">
          <div>
            <h1>{datosPersonales.nombre}</h1>
            <p>{datosPersonales.ocupacion}</p>
            <p>Email: {datosPersonales.email}</p>
            <p>Teléfono: {datosPersonales.telefono}</p>
            <p>Edad: {datosPersonales.edad} años</p>
            <p>Nacionalidad: {datosPersonales.nacionalidad}</p>
          </div>
        </div>

        <section>
          <h2>Perfil</h2>
          <p className="profile-text">{perfil}</p>
        </section>

        <section>
          <h2>Estudios</h2>
          <ul>
            {estudios.map((item, index) => (
              <li key={index}>
                {item.tipo} ({item.año}) - {item.institucion}
                {item.detalle && ` - ${item.detalle}`}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Cursos</h2>
          <ul>
            {cursos.map((curso, index) => (
              <li key={index}>
                {curso.nombre} - {curso.plataforma || curso.nivel} ({curso.duracion})
              </li>
            ))}
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
