"use client"

import { useState, useEffect, useRef } from "react"

export const CustomCursor = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  const dotPosition = useRef({ x: 0, y: 0 })
  const borderDotPosition = useRef({ x: 0, y: 0 })

  const [renderPos, setRenderPos] = useState({ dot: { x: 0, y: 0 }, border: { x: 0, y: 0 } })
  const [isHovering, setIsHovering] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const DOT_SMOOTHNESS = 0.2
  const BORDER_DOT_SMOOTHNESS = 0.1

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    const updateInteractiveElements = () => {
        const interactiveElements = containerRef.current?.querySelectorAll("a, button, img, input, textarea, select, .group") ?? []
        interactiveElements.forEach((element) => {
          element.addEventListener("mouseenter", handleMouseEnter)
          element.addEventListener("mouseleave", handleMouseLeave)
        })
        return interactiveElements;
    }

    const interactiveElements = updateInteractiveElements();

    // Animation function for smooth movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor
      }

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS)
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS)

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS)
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS)

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      })

      requestAnimationFrame(animate)
    }

    // Start animation loop
    const animationId = requestAnimationFrame(animate)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })

      cancelAnimationFrame(animationId)
    }
  }, [])

  if (typeof window === "undefined") return <>{children}</>

  return (
    <div ref={containerRef}>
      {children}
      <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="absolute rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{
          width: isPressed ? "6px" : "10px",
          height: isPressed ? "6px" : "10px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          transition: "width 0.1s, height 0.1s",
        }}
      />

      <div
        className="absolute rounded-full border border-primary/50"
        style={{
          width: isHovering ? "52px" : "28px",
          height: isHovering ? "52px" : "28px",
          transform: "translate(-50%, -50%)",
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: "width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
          backgroundColor: isHovering ? "rgba(19, 164, 236, 0.1)" : "transparent",
        }}
      />
      </div>
    </div>
  )
}

