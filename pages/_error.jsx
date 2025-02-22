import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    // return (
    //     <p>
    //         {this.props.statusCode
    //             ? `An error ${this.props.statusCode} occurred on server`
    //             : 'An error occurred on client'}
    //     </p>
    // )
    return <img src="/static/404.jpg" alt={500} />
  }
}

export default Error
