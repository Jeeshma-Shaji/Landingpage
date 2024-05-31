import React from 'react'
import { Button, Card, } from 'react-bootstrap'
import landingimg from './assets/coffe.png'
function Landing() {
  return (
    <>
     <div className="row ms-5 p-5">
      <div className="col">
      
      <h1 className='font-weight-bolder'>IT'S NOT JUST COFFEE,</h1>
      <h1>IT'S <span className='text-success font-weight-bolder'>STARBUCKS</span></h1>
      <p className='contents' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed blanditiis delectus sint ab explicabo ad aliquid esse, quas tempora voluptates, placeat dolore sequi fuga facere. Ullam eius distinctio quas sed.</p>
      <button className='btn btn-success  mt-3'>Learn More...</button>
    
      </div>
      
      <div style={{height:'470px'}} className="col  ms-5 ">
        <img src={landingimg} alt="" />
      </div>
     </div>
        
     <div  className="features justify-content-between bg-success border-box text-center my-5 p-5"> 
   <div className="col">
   <p>Starbucks</p>
      <h2>Beverage Subscripition</h2>
      <p>Starbucks Subscripition is Back!Sip Your Favourites for Less. Tap for Details. T&C Apply.</p>
      <p>Starting From Rs.789</p>
      <button className=' btn btn-light '>Know More</button>
   </div>
  </div>

  <div className="offers ms-5 my-4 p-5 justify-content-between align-items-center" >
    <h1 className='my-2'>Latest Offerings</h1>
    <div className="row my-2 justify-content-between align-items-center">
      <div className="col lg4 ">
      <Card className='mt-3 ' style={{ width: '18rem'  }}>
      <Card.Img variant="top"  src= "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/113846.webp" />
      <Card.Body>
        <Card.Title>Iced Belgium Chocolate Latte</Card.Title>
        <Card.Text className='p-1'>
          Espresso with decadent Belgian chocolate sauce,mocha sauce and steamed milk served over ice.
        </Card.Text>
        <p>$509.25</p>
        <Button variant="success">Add Item</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="col lg4">
        <Card className='mt-3 ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/104905.webp" />
      <Card.Body>
        <Card.Title>Alphonso Mango Java Chip Frappuccino</Card.Title>
        <Card.Text className='p-1'>
          Alphonso mango and milk are blended with ice and Java Chips. 
        </Card.Text>
        <p>$ 509.25</p>
        <Button variant="success">Add item</Button>
      </Card.Body>
    </Card>

      </div>
      <div className="col lg4">
      <Card className='mt-3  border-rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top"  src="https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/115283.webp" />
      <Card.Body>
        <Card.Title>Cold Brew With Ginger Ale</Card.Title>
        <Card.Text className='p-1'>
          A delicious double layered cold brew beverage with ginger ale. A pure delight to...
        </Card.Text>
        <p>$ 372.75</p>
        <Button variant="success">Add item</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>  
   
    
   
   </>
  
  )
}

export default Landing
