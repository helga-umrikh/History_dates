import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface Episode {
    start_year: number
    end_year: number
    topic: string
}

interface TimeSpinnerProps {
    spinnerItem: Episode
    index: number
}

const TimeSpinner: React.FC<TimeSpinnerProps> = ({ spinnerItem, index }) => {

  const spinnerRef = useRef(null);

    useEffect(() => {
      const spinnerElement = spinnerRef.current;
      const initialRotation = 0;
      
      gsap.set(spinnerElement, { rotation: initialRotation });
      gsap.to(spinnerElement, { rotation: 90, duration: 1 });

      return () => {
        gsap.killTweensOf(spinnerElement);
      };
    }, [index])


    return (
        <div className="time-spinner" ref={spinnerRef}>
            <svg
                width="530"
                height="530"
                viewBox="0 0 530 530"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    opacity="0.2"
                    cx="265"
                    cy="265"
                    r="264.5"
                    stroke="#42567A"
                />
            </svg>
            <div className="spinner__buttons">
                <button
                    className="spinner__button _button"
                >
                    {index + 1}
                </button>
            </div>
        </div>
    )
}

export default TimeSpinner
