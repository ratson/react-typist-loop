import PropTypes from 'prop-types'
import React, { Children, Component, cloneElement } from 'react'

class TypistLoop extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    interval: PropTypes.number,
  }

  static defaultProps = {
    interval: 1000,
  }

  state = {
    currentIndex: 0,
  }

  onTypingDone = () => {
    setTimeout(this.showNext, this.props.interval)
  }

  showNext = () => {
    const { children } = this.props
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % Children.count(children),
    })
  }

  render() {
    const { onTypingDone } = this
    const { currentIndex } = this.state
    const { children } = this.props
    return (
      <span>
        {Children.map(
          children,
          (child, i) =>
            i === currentIndex && cloneElement(child, { onTypingDone }),
        )}
      </span>
    )
  }
}

export default TypistLoop
