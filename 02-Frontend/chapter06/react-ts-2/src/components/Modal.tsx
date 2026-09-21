import { useRef } from 'react';

const Modal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <button onClick={() => dialogRef.current?.showModal()}>show modal</button>
      <dialog ref={dialogRef}>
        <p>inside modal</p>
        <button onClick={() => dialogRef.current?.close()}>close modal</button>
      </dialog>
    </div>
  );
};
export default Modal;
