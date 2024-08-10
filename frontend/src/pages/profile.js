import React, { useState } from 'react';
import "./profile.css";

function Profile() {
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: '',
    linkedin: '',
    facebook: '',
    instagram: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  return (
    <div className='profileDash'>
      <h1>Meu perfil</h1>
      <div className='profileHeader'>


        <div className='personalInfo'>
          <div className='profileImage'>
            <img src="" alt="Profile" />
            <input type="file" accept="image/*" />
          </div>
        </div>

        <div className='personalInfo'>
          <h1>Dados Pessoais</h1>
          <div>
            <input
              type="text"
              name="firstName"
              value={personalData.firstName}
              onChange={handleChange}
              placeholder="Nome"
            />

            <input
              type="text"
              name="lastName"
              value={personalData.lastName}
              onChange={handleChange}
              placeholder="Sobrenome"
            />
          </div>
          <div>

            <input
              type="text"
              name="jobTitle"
              value={personalData.jobTitle}
              onChange={handleChange}
              placeholder="Cargo"
            />
            <input
              type="tel"
              name="phone"
              value={personalData.phone}
              onChange={handleChange}
              placeholder="Telefone"
            />

          </div>

          <h1>Outros Dados</h1>

          <input
            type="email"
            name="email"
            value={personalData.email}
            onChange={handleChange}
            placeholder="E-mail Yazo"
          />



          <h1>Redes Sociais</h1>
          <input
            type="url"
            name="linkedin"
            value={personalData.linkedin}
            onChange={handleChange}
            placeholder="Linkedin"
          />
          <input
            type="url"
            name="facebook"
            value={personalData.facebook}
            onChange={handleChange}
            placeholder="Facebook"
          />
          <input
            type="url"
            name="instagram"
            value={personalData.instagram}
            onChange={handleChange}
            placeholder="Instagram"
          />
        </div>

        <div className='history'>
          <h1>Histórico</h1>
          <div>
            {/* Histórico de ações */}
          </div>
        </div>

      </div>
      <div className="actions">

        <button type="submit">Salvar</button>
        <button type="reset">Cancelar</button>
      </div>
    </div >
  );
}

export default Profile;
