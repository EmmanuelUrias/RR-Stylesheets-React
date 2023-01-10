
function Clock(props) {
    const clockStyle = {
        textAlign: 'center',
        fontSize: 'xxx-large',
        fontFamily: "'Times New Roman', Times, serif"
    }

    return (
        <div style={clockStyle}>
                
      <div >{props.time[0]}</div>
      <div >{props.time[1]}</div>
      <div >:</div>
      <div >{props.time[3]}</div>
      <div >{props.time[4]}</div>
      <div >:</div>
      <div >{props.time[6]}</div>
      <div>{props.time[7]}</div>
   
        </div>
    )

  }

  export default Clock