import { useState, useEffect, useCallback } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams()

  const {
    sendRequest,
    status,
    data: loadedComments
  } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => setIsAddingComment(true)

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comments;

  if (status === 'pending') {
    comments = <div className="centered"><LoadingSpinner/></div>
  }

   if (status === 'completed' && (loadedComments && loadedComments.length)) {
    comments = <CommentsList comments={loadedComments} />
   }

   if (status === 'completed' && (!loadedComments || !loadedComments.length)) {
     comments = <p className="centered">No comments were added yet!</p>
   }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
