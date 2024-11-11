import OurDishes from '../images/ourdishes.png';
import OurRestaurant from '../images/ourrestaurant.png';
import Open from '../images/whereareopen.png';
import React from 'react';

const Home = () => {
    return (
<>
        <section className="mainsection">
            <article className="mainarticle">
                <h1>Everything is free This Weekend</h1>
                <p>Lacus volutpat aliquet rhoncus ultricies eleifend tortor pellentesque. Cursus erat porta senectus nunc vestibulum scelerisque. Felis dolor potenti magnis magnis nunc? Sagittis nec vestibulum inceptos, pulvinar libero pretium. Gravida habitasse orci magna; vitae consectetur magna felis elementum. Conubia torquent efficitur cursus tortor imperdiet amet.</p>
            </article>
        </section>
        <section className="subsection">
            <article className="subarticle">
                <h2>Our Restaurant</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <img src={OurRestaurant} alt="Our plants" className="articleimage" id="ourplants"/>
                <form action="about.html">
                    <input type="submit" value="See our restaurant" className="btn btn-primary" />
                </form>
            </article>
            <article className="subarticle">
                <h2>Our dishes</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum maecenas dolor fringilla sollicitudin vestibulum, quis ante arcu. Curae primis himenaeos, sem interdum velit rhoncus posuere suspendisse? Leo ullamcorper imperdiet facilisis elit malesuada magna. Rutrum consectetur congue congue maecenas eros himenaeos nisl.</p>
                <img src={OurDishes} alt="Logo" className="articleimage"/>
                <form action="about.html">
                    <input type="submit" value="Our dishes" className="btn btn-primary"/>
                </form>
            </article>
            <article className="subarticle">
                <h2>Opening hours</h2>
                <p>Blandit efficitur id dapibus magnis adipiscing phasellus porta tincidunt tempor. Consequat habitant aenean non dui nunc consequat eget semper. Vestibulum semper lectus dolor convallis dui proin. Curabitur ut fames ut nibh lacinia rhoncus dis sollicitudin. Eget mattis molestie fusce faucibus integer justo lacinia vivamus risus.</p>
                <img src={Open} alt="Logo" className="articleimage"/>
            </article>
        </section>
        </>
    );
  }

  export default Home;