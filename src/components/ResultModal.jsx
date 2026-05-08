import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  let currRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        currRef.current.showModal();
      }
    }
  })

  return (
    <dialog ref={currRef} className="result-modal">
      <h2>You {result}</h2>

      <p>The target time was {targetTime} seconds</p>

      <p>You stopped with X seconds left</p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
