import React from "react";

function ModalSuccess({ clouseModal }) {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div onClick={clouseModal} className="modal_success">
      <div className="modal__container">
        <div onClick={(e) => e.stopPropagation()} className="modal__message">
            <div onClick={clouseModal} className="modal__clouse">&#10006;</div>
          <h2 className="modal__title">Спасибо, мы получили ваше сообщение.</h2>
          <h3 className="modal__text">Мы свяжемся с вами в ближайшее время</h3>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccess;
