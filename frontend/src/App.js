import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>


          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Vieira"/>
              <div className="user-info">
                <strong>João Victor Vieira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer: Data Science, Java, C#, SQL, Oracle PL/SQL, HTML5, CSS3, JavaScript, Git & GitHub, React, React Native, Node.js, AWS</p>
            <a href="https://github.com/joaovieira23">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Vieira"/>
              <div className="user-info">
                <strong>João Victor Vieira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer: Data Science, Java, C#, SQL, Oracle PL/SQL, HTML5, CSS3, JavaScript, Git & GitHub, React, React Native, Node.js, AWS</p>
            <a href="https://github.com/joaovieira23">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Vieira"/>
              <div className="user-info">
                <strong>João Victor Vieira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer: Data Science, Java, C#, SQL, Oracle PL/SQL, HTML5, CSS3, JavaScript, Git & GitHub, React, React Native, Node.js, AWS</p>
            <a href="https://github.com/joaovieira23">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/45154356?s=460&u=3ae25f40bfcf6c661c7fad6f27ea1f471acf88ac&v=4" alt="João Vieira"/>
              <div className="user-info">
                <strong>João Victor Vieira</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer: Data Science, Java, C#, SQL, Oracle PL/SQL, HTML5, CSS3, JavaScript, Git & GitHub, React, React Native, Node.js, AWS</p>
            <a href="https://github.com/joaovieira23">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
