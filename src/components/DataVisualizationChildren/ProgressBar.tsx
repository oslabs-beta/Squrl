import React, { useState } from "react"

type prop = {
  done: string
}

const Progress: React.FC<prop> = ({ done }) => {
  const [style, setStyle] = useState<{}>({})

  setTimeout(() => {
    let color = ''
    if (+done >= 99) color = '#95d1be'
    else if (+done < 99 && +done >= 90) color = '#fdad34'
    else color = '#e05a61'

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
