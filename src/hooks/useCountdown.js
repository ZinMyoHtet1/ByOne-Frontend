import { useEffect, useState } from "react";

const useCountdown = (date_getTime) => {
  const [warning, setWarning] = useState(false);
  // let now = new Date().getTime();

  const [difference, setDifference] = useState(date_getTime);

  useEffect(() => {
    setTimeout(() => {
      setDifference((prev) => prev - 1000);
    }, 1000);

    if (difference == 0) setDifference(date_getTime);
  }, [difference, setDifference, date_getTime]);
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  useEffect(() => {
    setWarning(hours < 1 && minutes < 1 && seconds < 10);
  }, [hours, minutes, seconds]);

  return { hours, minutes, seconds, warning };
};

export default useCountdown;
