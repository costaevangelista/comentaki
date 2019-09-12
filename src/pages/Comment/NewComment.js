import React, { useState, useContext } from "react";
import { useDatabasePush } from "../../database";
import firebase from "../../firebase";
import { AuthContext } from "../../auth";

const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const auth = useContext(AuthContext);

  const [formComment, setFormComment] = useState({
    content: "",
    user: { id: "", name: "" }
  });

  if (auth.user === null) {
    return null;
  }

  const onChangeForm = evt => {
    const [alternativeDisplayName] = auth.user.email.split("@");
    const { displayName } = auth.user;
    setFormComment({
      ...formComment,
      [evt.target.name]: evt.target.value,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: auth.user.uid,
        name: displayName || alternativeDisplayName
      }
    });
  };

  const createComment = () => {
    if (formComment.content !== "") {
      setFormComment({
        ...formComment
      });
      save(formComment);
      setFormComment({ ...formComment, content: "" });
    }
  };

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="form-group">
              <textarea
                className="form-control"
                value={formComment.content}
                name="content"
                placeholder="Conteúdo comentário"
                onChange={onChangeForm}
                rows="2"
              />
              <p />
              <button
                type="button"
                className="btn btn-info"
                onClick={createComment}
              >
                Comentar
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewComment;
