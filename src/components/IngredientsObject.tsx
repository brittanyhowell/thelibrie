


import React from 'react';

interface IngredientsInterface {
    data: any

}

export const Ingredients: React.FC<IngredientsInterface> = ({data}) => {
    const decode = decodeURI(data.attrs.ingredients)
    const json = JSON.parse(decode)
    return(
    <div>
        <h2 className={""}>Ingredients</h2>
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