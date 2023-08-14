import React, { Component } from 'react'


class DestroyThrough extends Component {


  render() {
    //console.log('props ', this.props)
    //console.log('lifeSpan: ', this.props.lifeSpan)
    //console.log('lifeSpanType:', this.props.lifeSpanType)
    
    if (Number.isInteger(this.props.lifeSpan)){
      const today = new Date()
      let destructionYear = null
      let destructionDate = null
      let destructionMonth = null
      // anniversary
      // 3 anniversary years:  start 7/31/2017  retain 7/31/2020
      if(this.props.lifeSpanType === "anniversary"){
        destructionYear = today.getFullYear() - this.props.lifeSpan
        destructionDate = today.getDate()
        destructionMonth = today.toLocaleString('en-us', { month: 'long' });
      
      } else if(this.props.lifeSpanType === "fiscal"){
        destructionYear = today.getFullYear() - this.props.lifeSpan
        const thisMonth = today.getMonth()
        if(thisMonth < 7){
          destructionYear -= 1
        }
        destructionDate = 30
        destructionMonth = "June"
      } else if(this.props.lifeSpanType === "calendar"){
        destructionYear = today.getFullYear() - this.props.lifeSpan
        destructionDate = 31
        destructionMonth = "December"
      } else if(this.props.lifeSpanType === null){
        destructionDate = "See RETENTION instructions."
        destructionMonth = ""
        destructionYear = ""
      }
        return(
          <React.Fragment>
            <h4 className="ui sub header">Record Copy Authorized to Destroy if Dated Before</h4>
            <div className="label">{`${destructionDate} ${destructionMonth} ${destructionYear}`}</div>
          </React.Fragment>
        ) 
      
    } else {
      return (<span></span>)
    }

    /*
    

    // if integer calculate destruction date
    // lifeSpan ( years ) minus June currentYear
    if (Number.isInteger(this.props.lifeSpan)){
      // production
      const today = new Date()

      // testing = Fri Jun 01 2018 12:33:30 GMT-0500 (Central Daylight Time)
      //const today = new Date(2018, 5, 1, 12, 33, 30, 0)
      //console.log('today: ' + today )
      //console.log('lifespan: ' + this.props.lifeSpan)

      let destructionDate = today.getFullYear() - this.props.lifeSpan
      // wait to change year after fiscal date or 1 June ( june = 5 )
      if(today.getMonth() < 6 ) {
        destructionDate--
      }
      // add June back to the front
      destructionDate = '30 June ' + destructionDate

      if(this.props.note) {
        destructionDate += ' — '
      }

      // conditional rendering
      return (
        <div>
          <h4 className="ui sub header">Record Copy Authorized to Destroy Through</h4>
          <div className="label">{destructionDate}</div>
        </div>
      )

    } else {
      return (<span></span>)
    }
  */

  }
  
}

export default DestroyThrough
