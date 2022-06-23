import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Weightloss = () => {
    const slideImages = [
        {
          url: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/52383BDD-D644-454A-AC1D-50E2DF6B7AF6-2.jpg',
          url1:'https://www.fitmeals.co.in/wp-content/uploads/2021/05/F497D877-C665-4718-9D60-DC6884CF8F86-2.jpg',
          url2:'https://www.fitmeals.co.in/wp-content/uploads/2021/05/6350561F-C9DA-4249-820B-74B62FA3E6D7-2-744x1024.jpg'
        //   caption: 'Slide 1'
        },
        {
          url: 'https://www.fitmeals.co.in/wp-content/uploads/2019/10/DSC02724-300x201.jpg',
        //   caption: 'Slide 2'
        },
        {
          url: 'https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto-360x244.jpg',
        //   caption: 'Slide 3'
        },
        {
            url:'https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance-360x244.jpg'
        }
      ];
       
  return (
    <div>
       <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div id='slider_img1'
               style={{'backgroundImage': `url(${slideImage.url}),url(${slideImage.url1}),url(${slideImage.url2})
               `}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}
export default Weightloss
