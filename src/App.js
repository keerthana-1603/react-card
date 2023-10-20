
import './App.css'
function App() {
  
    
  return (
    <div>
    <h1 className='heading'>React Price Card</h1>
    <div className='app'> 
    <Pricecard/>
    <Pricecard2/>
    <Pricecard3/>
    </div> 
    </div>
  )
}
//props
export default App

function Pricecard(){
  return(
    <div className='card'>
      <div className='card-head'>
        <h5 className='cardTop'>FREE</h5>
        <h1>$0/month</h1>
        <p className='outline'>______________________________</p></div>
        <div className='card-body'>
          <p>√ Single User</p>
          <p>√ 50GB Storage</p>
          <p>√ Unlimited Public Project</p>
          <p>√ Community Access</p>
          <p className='dim'>× Unlimited Private projects</p>
          <p className='dim'>× Dedicated Phone Supports</p>
          <p className='dim'>× Free Subdomain</p>
          <p className='dim'>× Monthly Status Reports</p>
          <button className='btn'>BUTTON</button>
          </div>
    </div>
  )
}

function Pricecard2(){
  return(
    <div className='card'>
      <div className='card-head'>
        <h5 className='cardTop'>PLUS</h5>
        <h1>$9/month</h1>
        <p className='outline'>______________________________</p></div>
        <div className='card-body'>
          <p>√ Single User</p>
          <p>√ 50GB Storage</p>
          <p>√ Unlimited Public Project</p>
          <p>√ Community Access</p>
          <p>√ Unlimited Private projects</p>
          <p>√ Dedicated Phone Supports</p>
          <p>√ Free Subdomain</p>
          <p className='dim'>× Monthly Status Reports</p>
          <button className='btn'>BUTTON</button>
          </div>
    </div>
  )
}

function Pricecard3(){
  return(
    <div className='card'>
      <div className='card-head'>
        <h5 className='cardTop'>PRO</h5>
        <h1>$49/month</h1>
        <p className='outline'>______________________________</p></div>
        <div className='card-body'>
          <p>√ Single User</p>
          <p>√ 50GB Storage</p>
          <p>√ Unlimited Public Project</p>
          <p>√ Community Access</p>
          <p>√ Unlimited Private projects</p>
          <p>√ Dedicated Phone Supports</p>
          <p>√ Free Subdomain</p>
          <p>√ Monthly Status Reports</p>
          <button className='btn'>BUTTON</button>
          </div>
    </div>
  )
}
