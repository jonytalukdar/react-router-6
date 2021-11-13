import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from '../comments/CommentsList';
import useHttp from '../../hooks/hooks/use-http';
import { getAllComments } from '../../lib/lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const { id } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No Commments Added Yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm id={id} onAddedComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
