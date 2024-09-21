import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Browse through our diverse menu, packed with options from local favorites to international cuisines, and enjoy fresh, hot meals delivered fast and hassle-free. Your next great meal is just a few clicks away!"</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return(
                    <div className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
