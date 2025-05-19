"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"

type AnimationVariant =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip"
  | "rotate"
  | "stagger-fade"
  | "stagger-slide"
  | "reveal-left"
  | "reveal-right"
  | "reveal-up"
  | "reveal-down"

interface UseScrollAnimationProps {
  variant?: AnimationVariant
  threshold?: number
  delay?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation({
  variant = "fade-in",
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
  triggerOnce = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  const getAnimationClass = () => {
    if (!isVisible) {
      return "opacity-0"
    }

    const baseClasses = "transition-all duration-1000 opacity-100"
    const delayClass = delay ? `delay-${delay}` : ""

    switch (variant) {
      case "fade-in":
        return `${baseClasses} ${delayClass}`
      case "slide-up":
        return `${baseClasses} ${delayClass} translate-y-0`
      case "slide-down":
        return `${baseClasses} ${delayClass} translate-y-0`
      case "slide-left":
        return `${baseClasses} ${delayClass} translate-x-0`
      case "slide-right":
        return `${baseClasses} ${delayClass} translate-x-0`
      case "zoom-in":
        return `${baseClasses} ${delayClass} scale-100`
      case "zoom-out":
        return `${baseClasses} ${delayClass} scale-100`
      case "flip":
        return `${baseClasses} ${delayClass} rotate-x-0`
      case "rotate":
        return `${baseClasses} ${delayClass} rotate-0`
      case "stagger-fade":
        return `${baseClasses} ${delayClass}`
      case "stagger-slide":
        return `${baseClasses} ${delayClass} translate-y-0`
      case "reveal-left":
        return `${baseClasses} ${delayClass} clip-path-reveal`
      case "reveal-right":
        return `${baseClasses} ${delayClass} clip-path-reveal`
      case "reveal-up":
        return `${baseClasses} ${delayClass} clip-path-reveal`
      case "reveal-down":
        return `${baseClasses} ${delayClass} clip-path-reveal`
      default:
        return `${baseClasses} ${delayClass}`
    }
  }

  const getInitialClass = () => {
    switch (variant) {
      case "fade-in":
        return "opacity-0"
      case "slide-up":
        return "opacity-0 translate-y-16"
      case "slide-down":
        return "opacity-0 translate-y-[-4rem]"
      case "slide-left":
        return "opacity-0 translate-x-16"
      case "slide-right":
        return "opacity-0 translate-x-[-4rem]"
      case "zoom-in":
        return "opacity-0 scale-90"
      case "zoom-out":
        return "opacity-0 scale-110"
      case "flip":
        return "opacity-0 rotate-x-90"
      case "rotate":
        return "opacity-0 rotate-12"
      case "stagger-fade":
        return "opacity-0"
      case "stagger-slide":
        return "opacity-0 translate-y-8"
      case "reveal-left":
        return "opacity-0 clip-path-unreveal-left"
      case "reveal-right":
        return "opacity-0 clip-path-unreveal-right"
      case "reveal-up":
        return "opacity-0 clip-path-unreveal-up"
      case "reveal-down":
        return "opacity-0 clip-path-unreveal-down"
      default:
        return "opacity-0"
    }
  }

  return {
    ref,
    isVisible,
    className: isVisible ? getAnimationClass() : getInitialClass(),
  }
}

export function AnimateOnScroll({
  children,
  variant = "fade-in",
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
  triggerOnce = true,
  className = "",
}: UseScrollAnimationProps & {
  children: React.ReactNode
  className?: string
}) {
  const { ref, className: animationClass } = useScrollAnimation({
    variant,
    threshold,
    delay,
    rootMargin,
    triggerOnce,
  })

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  variant = "stagger-fade",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  className = "",
}: {
  children: React.ReactNode
  staggerDelay?: number
  baseDelay?: number
  variant?: AnimationVariant
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  className?: string
}) {
  const { ref } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  })

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        const delay = baseDelay + index * staggerDelay

        return (
          <AnimateOnScroll variant={variant} delay={delay} triggerOnce={triggerOnce}>
            {child}
          </AnimateOnScroll>
        )
      })}
    </div>
  )
}
