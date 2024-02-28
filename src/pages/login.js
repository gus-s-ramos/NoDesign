import { useState } from 'react';

import './login.css';

function Login() {

    return (
    <div className="login-container">
      <div className="left"></div>
      <div className="right">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;