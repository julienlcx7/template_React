import React from 'react';
import './Content.css';  // Ensure you have corresponding CSS for styling
import { Icon } from '@iconify/react';
import {useSelector } from 'react-redux';
import coffeeIcon from '@iconify/icons-mdi/coffee';
const Content =({title}) => {
    const value_reducer = useSelector((state) => state.userReducer.value); 
  return (
    <div>
     <h1>{title}</h1>
     <p>ajoute  redux et met le footer en bas </p>
     <p>
        Coffee Icon with size and color: <Icon icon={coffeeIcon} width="48" height="48" color="brown" />
      </p>
      <p>valeur recupere depuis redux: <b>{value_reducer}</b></p>
    </div>
  );
}

export default Content;