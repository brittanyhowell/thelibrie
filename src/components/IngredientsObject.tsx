


import React from 'react';

interface IngredientsInterface {
    data: any

}

export const Ingredients: React.FC<IngredientsInterface> = ({data}) => {
    console.log(data)
    const decode = decodeURI(data.attrs.ingredients)
    const json = JSON.parse(decode)
    console.log(json)
    return(
    <div>
        <ul>
        {json.map(v=> 
            <li>
                  <span>
                      {v.name}
                  </span>
                  <span>
                      {v.quantity}g
                      </span>
            </li>
        )}
        </ul>
    </div>
)

}