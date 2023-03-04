import React from 'react';
import './Button.css';

export function Button(props) {
  return (
<div class="buttons">
      <button class="button btn-prev">Prev &lt;</button>
      <button class="button btn-next">Next &gt;</button>
    </div>
  );
}

export default Button;
