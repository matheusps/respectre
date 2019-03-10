import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Video = ({ src, ratio, className, children }) => {
  const videoClasses = classNames(className, 'video-responsive', {
    'video-responsive-16-9': ratio === '16:9',
    'video-responsive-4-3': ratio === '4:3',
    'video-responsive-1-1': ratio === '1:1',
  })
  return !!src ? (
    <video className={videoClasses} src={src} />
  ) : (
    <div className={videoClasses}>{children}</div>
  )
}

Video.propTypes = {
  /** Video Source */
  src: PropTypes.string,
  /** Video aspect ratio */
  ratio: PropTypes.oneOf(['16:9', '4:3', '1:1']),
  /** Aditional css classes */
  className: PropTypes.string,
}

Video.defaultProps = {
  ratio: '16:9',
}

export default Video
