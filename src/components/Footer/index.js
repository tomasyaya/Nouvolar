import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {styles} from './styles';
import {fetchUsers} from '../../redux/actions/actions';
import {func} from 'prop-types';
import {connect} from 'react-redux';

const {container} = styles;

const Footer = ({fetchUsers}) => {
  const [offSet, setOffSet] = useState(30);

  useEffect(() => {
    fetchUsers(`page=1&since=${offSet}`);
  }, [fetchUsers, offSet]);

  return (
    <View style={container}>
      <Button
        title={'Prev'}
        disabled={offSet === 30 ? true : false}
        onPress={() => setOffSet(state => (state -= 30))}
      />
      <Button
        title={'Next'}
        disabled={offSet === 150 ? true : false}
        onPress={() => setOffSet(state => (state += 30))}
      />
    </View>
  );
};

Footer.propTypes = {
  fetchUsers: func,
};

export default connect(
  null,
  {fetchUsers},
)(Footer);
