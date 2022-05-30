function ModalSuccess({ setActiveModalSuccess }) {
  return (
    <div className="modal_success" onClick={() => setActiveModalSuccess(false)}>
      <div className="modal_success__window">
        <span className="modal_success__message">
          Спасибо! Мы получили ваше сообщение
        </span>
      </div>
    </div>
  );
}

export default ModalSuccess;
