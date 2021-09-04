import { useContext, useEffect} from 'react';
import {flipedContext} from '../App';
import {flipListContext} from '../App';
import {stateContext} from '../App';
import Card from './Card';

var ids =[];
var counter = 0

function Game() {

  
  // get the context from app componenet
  const flipLists = useContext(flipListContext)
  const flippeds = useContext(flipedContext)
  const states = useContext(stateContext)


  const flipList = flipLists[0]
  const setFlipList = flipLists[1]

  const flipped = flippeds[0]
  const setFlipped = flippeds[1]

  const state = states[0]
  const setState = states[1]
  // ---------------------------




  const clickHandler =(card) => {

    // if card isn't flipped and the card's been matched to gether is not clickable
    if (state === true && card.isFlipped === false ){


      // we edit fliplist and every card is been clicked it's flipped change to true
      var newFlip = flipList.map((row) => {
        if (row.id === card.id){
          ids.push(row.id)
          return {...row, isFlipped:true} 
        } else{
          return row
        }
      })
      setFlipList(newFlip)
    

      // the carts that have been flipped sets in flipped state
      const flippedItem = newFlip.filter((item) => {
        return item.id === ids[0] || item.id === ids[1]
      })
    setFlipped(flippedItem)
    }
  }
  
  const flipHandler =() => {

  //  if two cards selected do the operation below
  if(flipped.length === 2){

    // compare two items of flipped list 
    if (flipped[0].name === flipped[1].name){ 

      // if two cards match together increase counter and if all cards have been matched alert a message and refresh page
      counter ++;
      if (counter === 6){
        alert('you won')
        window.location.reload(false)
      }
    }
      else{

        // if cards doesn't match together change state to false so we we can't click on the cards 
        setState(false)

        // set the selected carts to its initial state means change isFlipped to false
          const flipReverser =  flipList.map(row => {
            if (row.id === ids[0] || row.id === ids[1]){
              return{...row, isFlipped:false}
            }
            else{
              return row
            }
          })

          // do above function after a little bit that we can see the cards and change state to true so we can click on the cards
          setTimeout(function () {
            setFlipList(flipReverser)
            setState(true)
          }, 1200)
      }

      // reset flipped and ids, every time we're faced with two item
    setFlipped([])
    ids = []
  }
  }

  // after we setFliplist it doesnt update immediately the flipList so we shouid use this to have the new flipList 
  useEffect (flipHandler ,[flipped])
  

          return (
              <div className="card-container">
                  {flipList.map((card) => <Card card={card}  key={card.id} onClick={ () => clickHandler(card)}/>)}
              </div>

          );
}

export default Game;
