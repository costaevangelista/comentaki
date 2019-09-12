import React from "react";
import Time from "../../components/Time";

const Comment = ({ comment }) => {
  return (
    <tr>
      <td>
        <img
          className="img-circle rounded-circle"
          src="./user_log.png"
          width="70px"
          height="45px"
          alt="usercoment"
        />
        {comment.user.name}
      </td>
      <td>{comment.content}</td>
      <td className="text-center">
        <Time timestamp={comment.createdAt} />
      </td>
    </tr>
  );
};

export default Comment;
