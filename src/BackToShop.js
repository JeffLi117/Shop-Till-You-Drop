import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackToShop() {
  return (
    <div className="backBtnHolder" >
        <FontAwesomeIcon icon={faHandPointLeft} />
    </div>
  )
}
