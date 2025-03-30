import React from 'react'
import "../css/footer.css"
import Card from 'react-bootstrap/Card';
import pigg from "../images/pig.png"
import deli from "../images/deliver.png"
import str from "../images/toplogo.png"

const Footer = () => {
  return (
   <>
    <section id='scrollfoot'>
      <div>
      <Card style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>Team leader</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bipin singh</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>

      <div>
      <Card style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Basant kushwaha</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>

      <div>
      <Card style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Kisan vishkrama</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>

      <div>
      <Card  style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">prasant panday</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>

      <div>
      <Card  style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Praveen</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>

      <div>
      <Card  style={{ width: '21rem',height:"18rem" }}>
            <Card.Body>
                <Card.Title>developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Anshul</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">whatsaap</Card.Link>
                <Card.Link href="#">instagram</Card.Link>
            </Card.Body>
     </Card>
      </div>
    </section>

    <section id='whycoo'>
       <div ><h3>Why Choose <span>StarQuik</span></h3></div>
    </section>

    <section id='footimg'>
         <div>
            <img src={pigg} alt="" />
            <h2>Big saving</h2>
            <p>On your Bill</p>
         </div>

         <div>
            <img src={str} alt="" />
            <h2>TATA Trust & Quality</h2>
            <p>A lifetime promise</p>
         </div>

         <div>
            <img src={deli} alt="" />
            <h2>Same Day Delivery</h2>
            <p>At your doorstep</p>
         </div>
    </section>

    <article id='lasttest'>
        <div>
            <h5>At our store, you can find wide variety of:</h5>
           
           <li> Fresh & organic fruits and vegetables</li>

           <li>  Exotic fruits (dragon fruit, avocado, water chestnut, etc.)</li>

          
           <li>  Frozen veg (peas, corn, parantha, etc.)</li>

           <li>  Non-veg (meat, chicken, etc.)</li>

           <li>  Branded food (Instant mixes, noodles, jams, etc.)</li>

           <li>   Seafood (fish, prawns, etc.)</li>

           <li>  Dairy, bakery & eggs </li>

           <li> Grocery products </li>


           <li>  Foodgrain, oil & masala</li>

           <li>  Home care & fashion products </li>

           <li>  Beverages </li>

           <li>  Personal care products</li>
           
           <h5>How is our store unique?</h5>
           <li>   Our online store simplifies your shopping experience </li>

           <li>    We offer variety of fresh fruits, vegetables, exotic fruits, organic food items, non-veg, frozen food, sea food, etc. </li>

           <li>    View various products online with clear images and pertinent details </li>

           <li>   Get FAST & QUICK delivery for your ordered items </li>

           <li>   Enjoy cool discounts & offers, which ultimately leads to great savings on your BILL! </li>

           <li>    You can pay online using debit/credit card, net banking or UPI </li>

           <li>    Your ordered items would be shown in your shopping cart, you can track them or if required you can also repeat orders, whenever the need arises  </li>

           <li>   For any query or concerns regarding to your online order, you can contact our customer care team </li>

            <h5>Why Choose StarQuik?</h5>
            <li>     When it comes to quality factor, you can rely on our online store as we strive to deliver quality and fresh products to our consumers. </li>

            <li>   You can find the best-selling products from our top sellers in our store. </li>

            <li>   Get easy access to handpicked deals priced at the best competitive rates. </li>

            <li>   If you want to access and shop brand wise, then we also do have a separate segment dedicated to it</li>

            <li>   At regular intervals of time, you can also check out new additions to our store segment created just for you. </li>

            <li>   Wide variety of products ranging from beverages, bakery, organic fruits and veggies, exotic fruits, sea food, non veg, frozen veg, etc. </li>

            <li>   Benefit from cool offers and discounts. So, when you buy more, you also save more. </li>


        </div>

    </article>
     
     <article id='lastfoot'> 
        <div >
        <h3>  ABOUT STARQUIK</h3>
        <p>About  Us</p>
        <p>Terms of use</p>
        <p> Privacy Policy</p>
        <p>   FAQ</p>
        <p> Investors</p>
        </div>

        <div>
        <h3>  PAYMENT AND SHIPPING</h3>
        <p> Payment Methods</p>
        <p>  Shipping Policy</p>
        <p>  Locations We ship to </p>  
        </div>

        <div>
        <h3> CONTACT US </h3>
        <p> Contact Us  </p>
        <p> care@starquik.com  </p>
        <p> 9029190291   </p>
        </div>

        <div>
        <h3> Newsletter </h3>
       <p> Enter your email address, be first to get <br /> exclusive offers, updates, tips and more. </p>
       <input type="" name="" id="bhbh" />
        </div>
     </article>
     <div id='finlast'>
     Copyright © Fiora Online Limited. All rights reserved.
     </div>
   </>
  )
}

export default Footer