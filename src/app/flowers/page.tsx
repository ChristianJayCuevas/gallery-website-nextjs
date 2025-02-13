"use client";

import '../styles/flowers.scss';
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();
    function handleButtonClick() {
        router.push('/gallery');
    }
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className={`valentine-container ${isLoaded ? "loaded" : "not-loaded"}`}>
      <div className="night"></div>
      <div className="flowers">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`flower flower--${num}`}>
            <div className={`flower__leafs flower__leafs--${num}`}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`flower__leaf flower__leaf--${i + 1}`}></div>
              ))}
              <div className="flower__white-circle"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[...Array(num === 1 ? 6 : 4)].map((_, i) => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
              ))}
            </div>
          </div>
        ))}

        {/* Grass Elements */}
        {[1, 2].map((num) => (
          <div key={num} className="growing-grass">
            <div className={`flower__grass flower__grass--${num}`}>
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>
        ))}

        {/* Growing Grass Variants */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`long-g long-g--${i}`}>
            {[...Array(4)].map((_, j) => (
              <div
                key={j}
                className="grow-ans"
                style={{ "--d": `${3 + j * 0.6}s` } as React.CSSProperties}
              >
                <div className={`leaf leaf--${j}`}></div>
              </div>
            ))}
          </div>
        ))}

        {/* Small Grass Details */}
        {[2.4, 2.8, 3.2].map((delay, index) => (
          <div key={index} className="grow-ans" style={{ "--d": `${delay}s` } as React.CSSProperties}>
            <div className={`flower__g-right flower__g-right--${index + 1}`}>
              <div className="leaf"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Text */}
      <div className="valentine-text">
        Happy Valentines <span className="highlight">Meme ko!!!</span> ❤️<br/>
        <button onClick={handleButtonClick} className="btn btn-error">Click to proceed</button>
      </div>
    </div>
  );
}