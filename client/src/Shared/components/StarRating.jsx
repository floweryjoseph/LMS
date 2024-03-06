import { Star, StarHalf, StarOutline } from '@mui/icons-material';

const StarRating = (props) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <span key={idx}>
        {props.rating_star >= idx + 1 ? (
          <Star className="text-yellow-500" />
        ) : props.rating_star >= val ? (
          <StarHalf className="text-yellow-500" />
        ) : (
          <StarOutline className="text-yellow-500" />
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
