import * as React from "react";

export interface TypistLoopProps {
  interval: number;
}

const TypistLoop: React.FC<TypistLoopProps> = (
  { interval = 1000, children },
) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [mounted, setMounted] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState<number>();

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const showNext = () => {
    if (!mounted) return;
    setCurrentIndex((currentIndex + 1) % React.Children.count(children));
  };

  const onTypingDone = React.useCallback(() => {
    setTimer(setTimeout(showNext, interval));
  }, []);

  return React.Children.map(
    children,
    (child: any, i) =>
      i === currentIndex &&
      React.cloneElement(child, { onTypingDone }),
  );
};

export default TypistLoop;
