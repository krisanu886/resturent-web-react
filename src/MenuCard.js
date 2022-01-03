import React from 'react';

const MenuCard = () => {
    return(
        <>
         <div className='card-container'>
               <div className='card'>
                   <div className='card-body'>
                       <span className='card-number subtle card-circle'>1</span>
                       <span className='card-author subtle'>Breakfast</span>
                       <h2 className='card-title'>Maggi</h2>
                       <span className='card-description subtle'>
                       Lorem Ipsum is simply dummy 
                       text of the printing and typesetting
                        industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever 
                        since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to
                         make a type specimen book. It has survived 
                         not only five centuries, but also the leap 
                         into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with
                           the release of Letraset sheets containing Lorem 
                           Ipsum passages, and more recently with desktop 
                           publishing software like Aldus PageMaker including 
                           versions of Lorem Ipsum.
                        </span>
                   </div>
                <img src="https://www.bing.com/images/search?view=detailV2&ccid=aKy3Bg9l&id=2662D41BDEADE25E21F6FCA47938E67096108350&thid=OIP.aKy3Bg9lSLqTP8yjSiChyQHaE9
                &mediaurl=https%3a%2f%2f2.bp.blogspot.com%2f-klyr2pWcIQg%2fWZT1ngEk5UI%2fAAAAAAAAYz0%2f7jil4SC8_YQs3fD_bIYL1zNCoHJt2RwQACLcBGAs%2fs1600%2fStreet%252BSty
                le%252BMaggie%252BNoodles_finalforweb1.jpg&exph=1072&expw=1600&q=maggie+noodles+image&simid=608007248639438331&FORM=IRPRST&ck=F635C178D07B5079BE59B4FF8E
                3432AF&selectedIndex=11" alt='images' className='card-media' />
                <span className='card-tag subtle' >Order Now</span>
               </div>
           </div>
        </>
    );
}
