'use client';

import { useInView, useMotionValue, animate } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 1.4,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const target = direction === 'down' ? from : to;
      const initial = direction === 'down' ? to : from;
      motionValue.set(initial);

      const controls = animate(motionValue, target, {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // brisk ease-out that lands decisively without dragging
        onComplete: () => {
          if (ref.current) {
            ref.current.textContent = formatValue(target);
          }
          if (typeof onEnd === 'function') onEnd();
        },
      });

      return () => controls.stop();
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, formatValue, onStart, onEnd]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [motionValue, formatValue]);

  return (
    <span className={className} ref={ref}>
      {formatValue(to)}
    </span>
  );
}
