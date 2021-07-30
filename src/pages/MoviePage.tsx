import { useParams } from 'react-router-dom';

export const MoviePage = () => {
  const { episodeid } = useParams<Params>();
  return (
    <div>
      <h1>Episode {episodeid}</h1>
    </div>
  );
};
