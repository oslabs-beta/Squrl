import React, { useState } from "react"

type prop = {
  done: string
}

const Progress: React.FC<prop> = ({ done }) => {
  const [style, setStyle] = useState<{}>({})
// creates a color based on the cachehit/indexhit ratio passed down
  setTimeout(() => {
    let color = ''
    if (+done >= 99) color = '#95d1be'
    else if (+done < 99 && +done >= 90) color = '#fdad34'
    else color = '#e05a61'
//passes that color into an object that gets stored in state and rendered
    const newObj = { opacity: 1, width: `${done}%`, backgroundColor: color }
    setStyle({ ...newObj })
  }, 200)

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done} %
          </div>
    </div>
  )
}

export default Progress;
