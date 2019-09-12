import React from "react";
import Comment from "./Comment";
import { useDatabase } from "../../utils/database";

export const Comments = () => {
  const data = useDatabase("comments");
  if (!data) {
    return (
      <p className="alert alert-warning text-center m-2">
        Nenhum comentário adicionado até o momento.
      </p>
    );
  }

  const ids = Object.keys(data);
  if (ids.length === 0) {
    return (
      <>
        <div className="text-center">
          <div className="spinner-grow text-muted"></div>
          <div className="spinner-grow text-primary"></div>
          <div className="spinner-grow text-success"></div>
          <div className="spinner-grow text-info"></div>
          <div className="spinner-grow text-warning"></div>
          <div className="text-info">carregando...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="table-responsive p-2">
        <table className="table table-striped table-hover">
          <thead>
            <tr className="bg-info text-white">
              <th scope="col">Usuário</th>
              <th scope="col">Comentário</th>
              <th scope="col" className="text-center">
                Data | Hora
              </th>
            </tr>
          </thead>
          <tbody>
            {ids.map(id => {
              return <Comment key={id} comment={data[id]} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
