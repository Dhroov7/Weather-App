import React from 'react';
import highlightCardStyles from './highlightCard.module.css';

function HighlightCard(props) {
  return (
    <div className={highlightCardStyles["highlight-card"]}>
        {props.children}
    </div>
  )
}

export default HighlightCard;