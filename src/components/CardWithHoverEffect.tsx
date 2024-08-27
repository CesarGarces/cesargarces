import React, { useState, useRef } from "react"
import { Card, CardContent, Box, SxProps } from "@mui/material"

interface CardWithHoverEffectProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const CardWithHoverEffect: React.FC<CardWithHoverEffectProps> = ({ children, sx }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: isHovered ? "0 15px 30px rgba(0,0,0,0.4)" : "0 10px 20px rgba(0,0,0,0.3)",
        transform: isHovered
          ? `
            perspective(1000px)
            rotateX(${(mousePosition.y - (cardRef.current?.offsetHeight ?? 0) / 2) / 10}deg)
            rotateY(${-(mousePosition.x - (cardRef.current?.offsetWidth ?? 0) / 2) / 10}deg)
            scale(1.05)
          `
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
        ...sx,
      }}
    >
      <CardContent>{children}</CardContent>
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          transition: "opacity 0.3s ease-in-out",
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(180, 151, 246, 0.509), transparent 40%)`,
        }}
      />
    </Card>
  )
}

export default CardWithHoverEffect