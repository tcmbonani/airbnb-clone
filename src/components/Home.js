import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
import {listListing} from '../action/listingAction'

const Home = () => {
  const dispatch = useDispatch();
  
const listingList = useSelector(state => state.listListing)
const { loading, error, listings } = listingList;

  // Dispatching the action to fetch listings when the component mounts
  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
  {listings.map((listing) => (
       <Card
        src={listing.img}
        title={listing.title}
        description={listing.description}
        price={listing.price}
      />
  ))}
</div>

      )}
        {/* <div className='home_section'>
          <Card 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-848993641334938776/original/4c545525-3f19-41ec-a102-002a017d913e.jpeg?im_w=720"
          title="Farm stay in Winterton, South Africa"
          description="Kingfisher Cottage is a cosy 4 sleeper and is our newest addition to Tugela River Lodge. The unit boasts amazing views of the river and Spioenkop Mountain.."
          />
           <Card 
          src="https://a0.muscache.com/im/pictures/2fa749aa-40a2-4880-9dd4-a111c291c5c1.jpg?im_w=720"
          title="Entire home in Bronkhorstspruit, South Africa"
          description="Beautiful , modern and spacious 5 bedroom house  with ensuite bathrooms 40 minutes drive from Pretoria East.  The house is situated in Kungwini Ranch Estate overlooking Bronkhorsbaai Dam.  "
          />
           <Card 
          src="https://a0.muscache.com/im/pictures/2382d233-c6ed-4b7a-a8eb-a76ccb63e0f0.jpg?im_w=720"
          title="GOWRIE FARM Open planned 4 bedroom home with pool"
          description="Ideal for 4 couples but families welcome in this beautiful home with lots of room for relaxing. Stunning pool with big flat lawn over looking a big green grazing paddock. "
          />
        </div> */}

        {/* <div className='home_section'>
          <Card 
          src="https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720"
          title="The house in the middle"
          description="Everyone who cam jet off and fly can definately reach here"
          price ="$179.88/night"
          />
           <Card 
          src="https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720"
          title="The lions dean "
          description="Come and explore the Lions power in the jungle"
          price ="$452.00/night"
          />
           <Card 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/c82823cf-33f3-4261-8193-54ae7966983e.jpeg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together , led by a world of hosts"
          price ="$250.98/night"
          />

        </div> */}
    </div>
  )
}

export default Home