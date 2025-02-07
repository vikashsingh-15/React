import React from 'react';
import { Button, Card,CardBody,Container,Row,Col } from 'reactstrap';
import './App.css';

const  itemArray = Array(9).fill("");
function App() {
  const[isCross, setIsCross] = React.useState(false);
  const [winMessage, setWinMessage] = React.useState("");



  const checkIsWinner = () =>{
    if(itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0]!==""){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5] && itemArray[3]!==""){
      setWinMessage(`${itemArray[3]} wins`);
    }else if(itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8] && itemArray[6]!==""){
      setWinMessage(`${itemArray[6]} wins`);
    }else if(itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6] && itemArray[0]!==""){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7] && itemArray[1]!==""){
      setWinMessage(`${itemArray[1]} wins`);
    }else if(itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8] && itemArray[2]!==""){
      setWinMessage(`${itemArray[2]} wins`);
    }else if(itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8] && itemArray[0]!==""){
      setWinMessage(`${itemArray[0]} wins`);
    }else if(itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6] && itemArray[2]!==""){
      setWinMessage(`${itemArray[2]} wins`);
    }
  }

  const changeItem = index =>{
      if(itemArray[index]==="" && winMessage===""){
      itemArray[index] = isCross?"X":"O";
      setIsCross(!isCross);//this is importnt to update UI
      checkIsWinner();
    }else{
      return window.alert("already filled or game is over");
    }
  };

  const handelRelod = () =>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("");
  }
   

    return (
        <Container>
          <Row>
            <Col md={6}>{
              winMessage?(
                <div className="mb-2 mt-2">
                  <h1 className="text-success text-uppercase text-center">
                    {winMessage}
                  </h1>
                  <Button color="success" onClick={()=>handelRelod()}>Reload the Game</Button>
                </div>
              ) : (
                    <h1 className="text-center text-warning">
                      {isCross?"Cross's Turn":"Circle's Turn"}
                    </h1>
                )
            }


            {/* part 2 : Grid is created through array */}
            <div className="game-container">
              {itemArray.map((item,index)=>(

                <div className="cell">
                    <Card color="primary" onClick={()=>{changeItem(index)}}>
                      <CardBody className="box">
                        <h1>{item}</h1>
                      </CardBody>
                    </Card>
                </div>
              ))}
            </div>



            </Col>  
          </Row>
        </Container>
    );
}

export default App;
