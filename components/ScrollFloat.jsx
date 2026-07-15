import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef = null,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    let globalIndex = 0;
    const processNode = (node) => {
      if (typeof node === 'string') {
        return node.split('').map((char) => (
          <span className="char" key={globalIndex++}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ));
      }
      if (Array.isArray(node)) {
        return node.map((child, index) => {
          const processedChild = processNode(child);
          if (React.isValidElement(processedChild)) {
            return React.cloneElement(processedChild, { key: processedChild.key || `arr-child-${globalIndex++}-${index}` });
          }
          return processedChild;
        });
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(node, { key: node.key || `el-${globalIndex++}` }, processNode(node.props.children));
      }
      return node;
    };
    return processNode(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
