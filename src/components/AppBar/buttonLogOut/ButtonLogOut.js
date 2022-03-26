import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../../redux/asyncthunc';
import ModalLogOut from '../../ModalLogOut/ModalLogOut';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return <ModalLogOut onClickSuccess={() => dispatch(logOutThunk())} />;
};
export default ButtonLogOut;
