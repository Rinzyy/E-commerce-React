import Card from '../Card/Card.jsx'
import React from 'react'
import './featuredproduct.scss'

const data =[
    {
        id:1,
        title: 'Pants',
        img: 'https://img.ltwebstatic.com/images3_pi/2021/11/27/163797618479387a62b8ccf8dcb240d200bd85f362.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2021/11/27/1637976188b86f2c52984fbb19147defbcadcaa09b.webp',
        oldPrice:19,
        newPrice: 12,
    },
    {
        id:2,
        title: 'Hats',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/05/16/1652664655a24d1ea80d7a9c66f086dea5ae749b72.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/05/16/16526646763621c925fb02c454c25f9f249d755e5d.webp',
        oldPrice:12,
        newPrice: 2,
    },
    {
        id:3,
        title: 'Shirt',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/07/11/1657539831ad3de9097a0eba682349118d35ec6aca.webp',
        img2: 'https://img.ltwebstatic.com/images3_pi/2022/05/16/16526646763621c925fb02c454c25f9f249d755e5d.webp',
        oldPrice:122,
        newPrice: 12,
    },
    {
        id:4,
        title: 'Shoe',
        img: 'https://img.ltwebstatic.com/images3_pi/2022/12/10/1670657852d7921c3c41a03522b72f3e85a0295a1d.webp',
        img2: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80',
        oldPrice:19,
        newPrice: 12,
    }
]

const FeatureProduct = ({type}) => {
  return (
    <div id='featured' className='featureP'>
        <div className="top">
            <h3 > {type}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. In ante metus dictum at tempor. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Diam volutpat commodo sed egestas </p>
        </div>
        <div className="bottom">
            {
            data.map(post =>(
                <Card  key={post.id} item={post}/>
            ))

            }
        </div>
    </div>
  )
}

export default FeatureProduct