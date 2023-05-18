import React from 'react';
import './Cards.css';
import { CardItem } from './CardItem.js';
import Studio1 from './componentes/imgs/11.png';
import Studio3 from './componentes/imgs/am.png';
import Studio2 from './componentes/imgs/studio2.png';

export function Cards() {
  return (
    <div className='cards'>
      <h1 className='text-white'>Encontre o estúdio que você precisa!</h1>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
          <div className='col'>
            <div className='card'>
              <img src={Studio3} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Para Produzir</h5>
                <p className='card-text'>asdasdawsadawdjksahdawjhdsakdahwkd</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={Studio3} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Para Produzir</h5>
                <p className='card-text'>asdasdawsadawdjksahdawjhdsakdahwkd</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={Studio3} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>Para Produzir</h5>
                <p className='card-text'>asdasdawsadawdjksahdawjhdsakdahwkd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
