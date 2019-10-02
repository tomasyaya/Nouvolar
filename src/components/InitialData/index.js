import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../redux/actions/actions';
import {func} from 'prop-types';

const InitialData = ({fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return null;
};

InitialData.propTypes = {
  fetchUsers: func,
};

export default connect(
  null,
  {fetchUsers},
)(InitialData);
