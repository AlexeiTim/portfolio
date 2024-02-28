import React from 'react';
import Typed from 'typed.js';

const TypedTitle = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Future Frontend Developer',
        'Future Frontend Developer',
        'Future Frontend Developer',
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });
  return (
    <>
      <span className='type-text' ref={el}>Future Frontend Developer</span>
    </>
  );
};

export default TypedTitle;
