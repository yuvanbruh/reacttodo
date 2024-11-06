import { useState } from 'react'
import Navbar from './components/Navbar'
import Content from './Content'
import Secondlayer from './Secondlayer'
import Thirdlayer from './Thirdlayer'

function App() {
  // const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:""})
  const [add, setAdd] = useState([])
  // const [insert, setInsert] = useState()
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
    
  }
  const hither=()=>{
    // alert("therenoshit")
setAdd([...add,form])
  }
  return (
    <><div className="box flex">
<div className="first w-[15%]  h-[713px]"></div>
<div className="Container w-[63%]">
 <div className="font-semi-bold  relative left-[450px] py-6">
 <Navbar/>
 </div>
  <div className="flex">
    <div className="search"><input type="text"  placeholder='Search note...' name='email' value={form.email} onChange={handleChange}  className="engine font-medium w-[600px] h-11 rounded   relative left-10  " />
    <Content/>
    <Secondlayer insert={add}/>
    {/* <Thirdlayer/> */}
    </div>
    <div className="all relative left-[60px]">
    <select className="redbone">
    <option>ALL</option>
    <option value="html">HTML</option>
    <option value="java">JAVA</option>
    {/* <option value="C++">C++</option> */}
    {/* <option value="php">PHP</option> */}
    <option value="perl">PERL</option>
  </select>
    </div>
    <div className="night relative left-[80px] flex items-center  justify-center">
      <button onClick={hither}>ADD  </button>
    </div>
  </div> 
</div>
<div className="third w-[7%]  h-[713px]"></div>
<div className="fourth w-[15%] h-[713px]"></div>
</div>
    </>
)
}
export default App
