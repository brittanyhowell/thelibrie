import React from 'react';
import styled from 'styled-components'
interface RecipeMethodInterface {
    data: any

}

export const RecipeMethod: React.FC<RecipeMethodInterface> = ({data}) => {

    const decode = decodeURI(data.attrs.methods)
    const json = JSON.parse(decode)
    console.log(json)
    return(
    <div>
          <h2 className={"text-4xl italic text-gray-600 mb-10 "}>Method</h2>
        <ul>
        {json.map((v,i)=> 
            <li className={"mb-10 relative"}>
                <div className={"absolute text-gray-500 border-gray-500 border -left-8 top-4 w-6 max-w-5 h-6 max-h-6 rounded-full flex items-center justify-center"}><span>{i+1}</span></div>
                  <h5 className={"text-xl italic"}>
                      {v.heading}
                  </h5>
                  <div dangerouslySetInnerHTML={{ __html: v.body }} className={"text-gray-600"}>{}</div>
            </li>
        )}
        </ul>
    </div>
)

}

const NumberDot = styled.div`
    border: 1px solid black;
    position: absolute;
`