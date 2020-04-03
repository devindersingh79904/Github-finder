import React, { useContext } from 'react';
import AlertContext from '../../Context/alert/alerContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fab fa-into-circle' />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
