import React from 'react'

const Secondlayer = ({insert}) => {
  const handlechange=()=>{

  }
  const handleedit=()=>{

  }
  const howtat=()=>{
    alert("hi ther")
  }
  return (
    <div className='seconds'>
      <div className="heading">Added Todos  :</div>
      <div className="todos">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
      <div className="inserts">
{insert.map(e=>(  <>
<div className="hi flex">
  <div className="ul"><ul>
<li>
  <input type="checkbox" />
  <span>{e.email}</span>
</li>
</ul></div>
<div className="button hover:bg-blue-800" onClick={handlechange}><button>Delete</button></div>
<div className="Add w-11 hover:bg-blue-800" onClick={handleedit}><button>Edit</button></div>
</div>
</>
))}
    
      </div>
    </div>
  )
}

export default Secondlayer
