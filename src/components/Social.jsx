import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaAngellist, FaMediumM } from 'react-icons/fa';

const Social = () => (
  <div className="headline-icons">
    <ul className="icons">
      <li key={1} className="social-icons">
        <button type="button" className="github social-button" label="GitHub profile"><a href="https://github.com/Alexr16" aria-label="Jorge's github account" target="_blank" rel="noreferrer noopener"><FiGithub /></a></button>
      </li>
      <li key={2} className="social-icons">
        <button type="button" className="linkdin social-button" label="Linkedin profile"><a href="https://www.linkedin.com/in/jorgeriosr/" aria-label="Jorge's linkedin account" target="_blank" rel="noreferrer noopener"><FiLinkedin /></a></button>
      </li>
      <li key={3} className="social-icons">
        <button type="button" className="angellist social-button" label="AngelList profile"><a href="https://angel.co/u/jorge-rios-7" aria-label="Jorge's angellist account" target="_blank" rel="noreferrer noopener"><FaAngellist /></a></button>
      </li>
      <li key={4} className="social-icons">
        <button type="button" className="twitter social-button" label="Twitter profile"><a href="https://twitter.com/jorgeriosr16" aria-label="Jorge's twitter account" target="_blank" rel="noreferrer noopener"><FiTwitter /></a></button>
      </li>
      <li key={5} className="social-icons">
        <button type="button" className="medium social-button" label="Medium profile"><a href="https://medium.com/@jorge19960316" aria-label="Jorge's medium account" target="_blank" rel="noreferrer noopener"><FaMediumM /></a></button>
      </li>
    </ul>
  </div>
);

export default Social;
