import React from 'react';
import { Button } from '@mui/material';
import './SearchPage.css'
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div className='searchPage'>
          <div className='searchPage_info'>
            <p>62 stays . 26 august to 30 august . 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancelation Flexibility </Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div>
        <SearchResult 
         img="https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720"
         location="Privacy room in ceter of london"
         title="The house in the middle"
         description="12 guests . 5 bedrooms . 8 beds . 5 baths"
         star={4.73}
         price ="$179.88/night"
         total="$889.20 total"
         />

       <SearchResult 
         img="https://a0.muscache.com/im/pictures/2382d233-c6ed-4b7a-a8eb-a76ccb63e0f0.jpg?im_w=720"
         location="GOWRIE FARM Open planned 4 bedroom home with pool"
         title="up town burbs nice view"
         description="15 guests . 7 bedrooms . 10 beds . 7 baths"
         star={5.6}
         price ="$189.99/night"
         total="$1008.30 total"
         />
    </div>
  )
}

export default SearchPage