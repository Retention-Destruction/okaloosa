import React, { Component } from 'react'
import DestroyThrough from './destroyThrough'

class ShowRecord extends Component {

  render() {
    //console.log('props ', this.props)
    const record = this.props.data[0]
    //console.log('record', record)

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{record.title}</div>
          <div className="meta">
            <span>{record.scheduleNumber}</span><span>{record.itemNumber}</span>
          </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Retention</h4>
          <p>{record.recordCopyAuthorizedToDestroyNote}</p>
        </div>
        <div className="content description">
          <h4 className="ui sub header">Description</h4>
            <p>{record.description}</p>
        </div>
        <div className="extra content">
          <DestroyThrough
            lifeSpan={record.recordCopyLifeSpan}
            lifeSpanType={record.recordCopyLifeSpanType}
          />  
        </div>
      </div>
    )
  }
}

export default ShowRecord
