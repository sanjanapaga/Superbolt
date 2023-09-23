import React, { useState, useEffect } from 'react';

const ImageGallery = ({ images }) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || Array(images.length).fill(0);
    return storedLikes;
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [imageComments, setImageComments] = useState(() => {
    const storedImageComments = JSON.parse(localStorage.getItem('imageComments')) || Array(images.length).fill([]);
    return storedImageComments;
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('imageComments', JSON.stringify(imageComments));
  }, [imageComments]);

  // Like button handler...
  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  // Comment submission handler...
  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const newImageComments = [...imageComments];
      newImageComments[selectedImageIndex] = [
        ...newImageComments[selectedImageIndex],
        commentText
      ];
      setImageComments(newImageComments);
      setCommentText('');
    }
  };

  // Image click handler...
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // Toggle comment form handler...
  const toggleCommentForm = () => {
    setSelectedImageIndex(null);
    setCommentText('');
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-card" style={{ display: 'inline-block', margin: '10px' }}>
          <img
            src={image}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(index)}
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
          <div className="like-container">
            <h1>{likes[index]}</h1>
            <button onClick={() => handleLike(index)}>Like</button>
          </div>
          <div>
            {selectedImageIndex === index && (
              <div>
                <button onClick={toggleCommentForm}>
                  {imageComments[index].length > 0 ? 'Hide Comments' : 'Comment'}
                </button>
                {imageComments[index].length > 0 && (
                  <div>
                    {imageComments[index].map((comment, commentIndex) => (
                      <div key={commentIndex} className="comment">
                        {comment}
                      </div>
                    ))}
                  </div>
                )}
                {selectedImageIndex === index && (
                  <div>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>Send</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
