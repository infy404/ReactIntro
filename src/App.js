import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Products from './containers/products'

const App = () => {

  // const [bgColor, setBgColor] = useState('red')
  // const [boxWidth, setBoxWidth] = useState(50) //Best define what kind of data is coming in, even if its empty.
  // const [userInput, setUserInput] = useState('')
  // const splitValues = userInput.split("=")


  
  

  const [dynamicStyle, setDynamicStyle] = useState({height: '100px',
                                                    width: '100px'})
  const assignDynamicStyle = (inputText)=>{
    let splitText = inputText.split("=")
    const assignObject = {...dynamicStyle}
    assignObject[splitText[0]] = splitText[1]
    setDynamicStyle(assignObject)
  }

  const productList = [
    {name: 'cooker', price:30, image:'https://media.istockphoto.com/id/182802683/photo/pressure-cooker.jpg?s=612x612&w=0&k=20&c=DEkCnnx-wXchhGVxc5ws5T3YgmXpjtERo9GNIYfqR1k=', backgroundColor:'rgb(245, 245, 245)', isLiked: false},
    {name: 'ball', price:31, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZfiFooiCet0hOlPf_5eJDlU31DUepzpIfI2vBfk&s', backgroundColor:'rgb(255, 219, 219)', isLiked: false},
    {name: 'remote', price: 200, image: 'https://i.guim.co.uk/img/media/8459da1aab3ef116fd75f344ce9650e8e32a365f/693_897_4699_2819/master/4699.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ab3cccacc75e2cd047d8ca9b9d65be67', backgroundColor: 'rgb(220,220,220)', isLiked: false}  
  ]

  

  return (
    <>    
    <Products productList={productList} />
    
    {/* <div className='App' style={dynamicStyle}>
    </div>
    <input 
      placeholder='Enter any Style'
      onKeyUp={(e) =>assignDynamicStyle(e.target.value)}>
      
    </input> */}

    

    </>
    

  );

}

export default App;
