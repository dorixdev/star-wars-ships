import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/config/store';
import { startCheking } from '../app/services/auth/actions';

export const useLogged = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(startCheking());
  }, [dispatch]);

  return {
    uid,
    checking,
  };
};
