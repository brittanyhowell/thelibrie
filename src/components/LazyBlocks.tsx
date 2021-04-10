import React from 'react';
import { Ingredients } from './IngredientsObject';
import { RecipeMethod } from './RecipeMethod';

export const LazyBlock = {
    "core/paragraph" :  v=><div dangerouslySetInnerHTML={{ __html: v.innerContent }}>{}</div>,
    "lazyblock/recipe-method-container":  v=><RecipeMethod data={v} />,
    "lazyblock/ingredients":  v=><Ingredients data={v} />,
    null: ()=><></>
}