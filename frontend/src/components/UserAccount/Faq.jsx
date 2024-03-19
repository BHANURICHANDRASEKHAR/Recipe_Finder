import React from 'react'
import { Collapse } from 'antd';
function Faq() {
    const text=(
        <p style={{ paddingLeft: 24 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum aperiam. Perspiciatis, porro!
      </p>
    )
    const items= [
        {
          key: '1',
          label: 'What happens when I update my email address (or mobile number)?',
          children:text
        },
        {
          key: '2',
          label: 'Does it improve the user experience of a website?',
          children:text
        },
        {
          key: '3',
          label: 'Does it improve the user experience of a website?',
          children:text
        },
      ];
  return (
   
<div className=''>
  <h2>FAQ</h2>
<Collapse className='' items={items} bordered={false} defaultActiveKey={['1']} />  
</div>
 )
}

export default Faq;
