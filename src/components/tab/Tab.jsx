import React from 'react'

function Tab({title,active,id,setSelected}) {
  return (
    <div className={active ? ' tab active' :"tab"} onClick={setSelected(id)}>
      {title}
    </div>
  )
}

export default Tab