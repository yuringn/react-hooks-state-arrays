import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterFood, setFilterFood] = useState("All");

  const filterFoodArr = foods.filter(food=> {
    if (filterFood==="All"){
      return true
    }else{
      return filterFood ===food.cuisine
    }
  })


  
  const spicyFoodArr = filterFoodArr.map(food=> <li key={food.id} onClick={()=>updateFood(food.id)}>
     Name: {food.name} ∕ Cuisine: {food.cuisine} ∕ Heat Level: {food.heatLevel}
    </li>)
  
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const addFood = [...foods, newFood];
    setFoods(addFood)
  }

  // const deleteFood = (id)=>{
  //   const updatedFoodArr = foods.filter(food=> food.id !== id)
  //   console.log("updatedFoodArr", updatedFoodArr)
  //   setFoods(updatedFoodArr)
  // }

  const updateFood = (id) => {
    const newFoodArr = foods.map(food => {
      if (food.id===id){
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      }else {
        return food
      }
    })
    setFoods(newFoodArr)
  }

  const handleFilterChange =(e)=>setFilterFood(e.target.value)

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{spicyFoodArr}</ul>
      
    </div>
  );
}

export default SpicyFoodList;
