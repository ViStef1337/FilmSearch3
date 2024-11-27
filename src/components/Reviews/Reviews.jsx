import { useEffect, useState } from 'react';
import { getFilmReviews } from '../../service/filmAPI.js';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmReviews(filmId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmId]);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <p>Review{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
