import React from 'react';

const Alert = ({ alert }) => {
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
