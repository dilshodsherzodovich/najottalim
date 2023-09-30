import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

function Timer({ handleResend }) {
  const [resend, setResend] = useState(false);
  const time = new Date();
  time.setMinutes(time.getMinutes() + 10);

  const { seconds, minutes, start, restart } = useTimer({
    expiryTimestamp: time, // Replace with your timestamp
    onExpire: () => {
      setResend(true);
    },
  });

  useEffect(() => {
    start();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="flex gap-2">
      {resend ? "Didn't get the code?" : null}
      <button
        disabled={!resend}
        type="button"
        className={`${!resend ? "text-lightGrey" : ""}`}
        onClick={() => {
          restart();
          handleResend();
          setResend(false);
        }}
      >
        Resend
      </button>
      <p>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
}

export default Timer;
