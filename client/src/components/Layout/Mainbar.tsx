import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';
import styles from '../Layout/Mainbar.module.sass';

export function Mainbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('im clicking');
    navigate('./login', { replace: true });
  };
  return (
    <nav className={styles.mainbar}>
      <div className={styles.logo}>Reservefacil.com</div>
      <ul className={styles['items-list']}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/languaje'>Language</a>
        </li>
      </ul>
      <Button title='Login' onClick={handleLogin} />
    </nav>
  );
}
