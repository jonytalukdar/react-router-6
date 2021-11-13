import { useRef, useEffect } from 'react';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import useHttp from '../../hooks/hooks/use-http';
import { addComment } from '../../lib/lib/api';
import classes from './NewCommentForm.module.css';

const NewCommentForm = ({ onAddedComment, id }) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, id: id });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
