import React from 'react';

interface RecipeMethodInterface {
    data: any

}

export const RecipeMethod: React.FC<RecipeMethodInterface> = ({data}) => {

    const decode = decodeURI(data.attrs.methods)
    const json = JSON.parse(decode)
    console.log(json)
    return(
    <div>
        <ul>
        {json.map(v=> 
            <li>
                  <h5>
                      {v.heading}
                  </h5>
                  <div dangerouslySetInnerHTML={{ __html: v.body }}>{}</div>
            </li>
        )}
        </ul>
    </div>
)

}