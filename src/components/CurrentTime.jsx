function ClockTime() {
  const time = new Date();
  return <center>This is the current time:{time.toString()} .
  <br></br>
  <span>Local Time:</span>{time.toLocaleDateString()}</center>
};

export default ClockTime;