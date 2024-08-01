import React,{useState} from 'react'
import Square from './Square'

const Board1 = () => {
    
    const [state1,setState1]=useState(Array(16).fill(null));
    const [turn,setTurn]=useState(true);

    const checkwinner=()=>{
        const winner=[

            //4X4 matrix
            [0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15],
            [0,4,8,12],
            [1,5,9,13],
            [2,6,10,14],
            [3,7,11,15],
            [0,5,10,15],
            [3,6,9,12]
        ];
        for(let logic1 of winner){
              const [a,b,c,d]=logic1;
              if(state1[a]!==null && state1[a]===state1[b] && state1[b]=== state1[c] && state1[c] === state1[d]){
                return state1[a];
              }
            }
            return false;
    }

    const theWinner= checkwinner();

    const isTie = !theWinner && state1.every((square) => square !== null);

    const handleClick=(ind)=>{
        if(state1[ind]!==null)
            {
                return;
            }
        // console.log(" click on index",ind)
        const newState1=[...state1];
        newState1[ind]=turn ? 'X' : 'O';
        setState1(newState1);
        setTurn(!turn);
    };

    const handleReset=()=>{
        setState1(Array(16).fill(null))
    }
  return (
    
     <div className="main-container">
     { theWinner ? ( <> {theWinner} won the game
        <button onClick={handleReset}> Play Again</button> </> ):
          isTie ? (
            <>
                It's a tie! 
                <button onClick={handleReset}> Play Again</button>
            </>
        ) : 
       ( <>
        {/* <p>4X4 Matrix Game</p> */}
        <h3>Player {turn?'X':'O'} turn</h3>
        <div className='board-row'>
           <Square onClick={()=>handleClick(0)} value={state1[0]}/>
           <Square onClick={()=>handleClick(1)} value={state1[1]}/>
           <Square onClick={()=>handleClick(2)} value={state1[2]}/>
           <Square onClick={()=>handleClick(3)} value={state1[3]}/>
        </div>
        <div className='board-row'>
           <Square onClick={()=>handleClick(4)} value={state1[4]}/>
           <Square onClick={()=>handleClick(5)} value={state1[5]}/>
           <Square onClick={()=>handleClick(6)} value={state1[6]}/>
           <Square onClick={()=>handleClick(7)} value={state1[7]}/>
        </div>
        <div className='board-row'>
           <Square onClick={()=>handleClick(8)} value={state1[8]}/>
           <Square onClick={()=>handleClick(9)} value={state1[9]}/>
           <Square onClick={()=>handleClick(10)} value={state1[10]}/>
           <Square onClick={()=>handleClick(11)} value={state1[11]}/>
        </div>
        <div className='board-row'>
           <Square onClick={()=>handleClick(12)} value={state1[12]}/>
           <Square onClick={()=>handleClick(13)} value={state1[13]}/>
           <Square onClick={()=>handleClick(14)} value={state1[14]}/>
           <Square onClick={()=>handleClick(15)} value={state1[15]}/>
        </div>
        
        </> )}
        </div>
  )
}

export default Board1
