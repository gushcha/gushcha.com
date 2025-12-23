'use client'

import React, { FC, useState } from 'react'
import NextImage from 'next/image'
import Modal from '@/components/shared/modal/Modal'

interface ImageProps {
  src: string
  alt: string
  className?: string
  enablePreview?: boolean
  width?: number
  height?: number
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  className = '',
  enablePreview = true,
  width,
  height,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    if (enablePreview) {
      setIsModalOpen(true)
    }
  }

  const imageStyle: React.CSSProperties = {
    cursor: enablePreview ? 'pointer' : 'default',
  }

  const imageElement = width && height ? (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={imageStyle}
      className={`object-cover ${className}`}
      onClick={handleImageClick}
    />
  ) : (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      className={`object-cover ${className}`}
      onClick={handleImageClick}
    />
  )

  return (
    <>
      {imageElement}
      {enablePreview && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img
            src={src}
            alt={alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />
        </Modal>
      )}
    </>
  )
}

export default Image
