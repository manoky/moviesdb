/* eslint-disable arrow-parens */
import React from 'react';
import { userImg } from '../../helpers/URL';


type Props = {
  comments: Array<Object>,
}

const Comment = (props: Props) => {
  const { comments } = props;

  return (
    <div className="Comment">
      <h2>User Reviews</h2>
      <hr />
      <div className="CommentWrapper">
        {
          comments && comments.map(comment => (
            <div key={comment.id} className="CommentItem">

              <div className="CommentAuthor">
                <div className="CommentImg">
                  <img src={userImg()} alt={comment.author} />
                </div>
              </div>

              <div className="CommentContent">
                <div className="CommentUsername">
                  {comment.author}
                </div>
                {comment.content}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Comment;
