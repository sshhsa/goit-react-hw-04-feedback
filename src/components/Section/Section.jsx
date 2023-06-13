import React from 'react';

import css from '../Feedbacks/Feedbacks.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
