import React from "react";
import "./repos.css";

export default function Repos({ repos }) {

    // Se nao tiver repositorio, passa a função pra não gerar o erro
  if (!repos) return;

  
  return (
    <div className="reposContainer">
      {repos.map((repo) => {
        return (
          <div className="repo">
            <span>
              <strong>Nome: </strong>
              {repo.name}
            </span>
            <br />
            <span>
              <strong>Descrição: </strong>
              {repo.description}
            </span>
            <br />
            <span>
              <a href={repo.html_url} target="_blank">
                Link do repositorio
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
}
