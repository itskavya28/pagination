import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Posts = ({ posts, loading, setShowModel, setEditRecord }) => {
      
    const handleChange = (post) => {
        setEditRecord(post);
        setShowModel(true);
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

  return (
    <ul data-testid="user-cards-testid" className='list-group mb-4'>
      {posts.map(post => (
        <Card key={post.id} style={{ width: '18rem', marginBottom: '1rem' }}>
            <Card.Body>
                <Card.Title>
                    {`Title ${post.id}`}
                    <button
                        className="edit-button"
                        type="button"
                        onClick={() => handleChange(post)}
                    >
                    <FontAwesomeIcon icon={faPen} onChange={handleChange}/>
                    </button>
                </Card.Title>
                <Card.Text>
                    {post.title}
                </Card.Text>
            </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

Posts.propTypes = {
    loading: PropTypes.bool,
    setShowModel: PropTypes.func,
    setEditRecord: PropTypes.func,
    posts: PropTypes.array
}

export default Posts;