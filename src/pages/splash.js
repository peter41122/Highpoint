import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Splash() {
  const history = useHistory();
  const [percent, SetPercent] = useState(0)

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (percent < 100) {
        setInterval(() => SetPercent(100), 3000);
      } else {
        setInterval(() => SetPercent(101), 3000);
        if (percent === 101) history.push('/signin');
      }
    }

    return () => { isMounted = false }
  }, [percent]);

  return (
    <div className="flex m-auto min-h-screen splash">
      <img className="m-auto w-1/2 h-1/2 md:w-1/6 md:h-1/6 " src="../assets/full-logo.png" alt="Highpoint" />
    </div>
  );
}

export default Splash;