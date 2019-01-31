(function () {
  const hourHand = document.querySelector('.clock-hour')
  const minuteHand = document.querySelector('.clock-minute')
  const secondHand = document.querySelector('.clock-second')

  let getTime = function () {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    //1.時間0~23=>0~11
    //2.加入微調數值(時針分針會隨著時間位移，時針加分針，分針加秒針，ex:10點~11點中間度數是30度，再切成分針60份)
    //3.加回原本在css裡旋轉的預設數值

    let hourDeg = (360 / 12 * (hour % 12)) + (30 / 60 * min) + 270
    let minuteDeg = (360 / 60 * min) + (6 / 60 * sec)
    let secondDeg = (360 / 60 * sec) + 180

    hourHand.style.transform = `rotate(${hourDeg}deg)`
    secondHand.style.transform = `rotate(${secondDeg}deg)`
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`

    // 當秒針轉到0時，因為最多只到360度，超過後會產生跳針情形，因此加入判斷式避免。
    if (sec === 0) {
      secondHand.style.transitionDuration = '0s'
    } else {
      secondHand.style.transitionDuration = '0.05s'
    }
  }
  // 因為setInterval會過一秒才執行，因此先執行一次
  getTime()
  setInterval(getTime, 1000)
})()