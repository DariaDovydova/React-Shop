import { useEffect } from 'react';

function Alert({name = '', closeAlert = Function.prototype}) {

  useEffect(() => {
    const alertId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(alertId);
    }

    //eslint-disable-next-line
  }, [name]);


  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}

export { Alert };