import React from "react";
import styled from "styled-components";

const Container = styled.div `
    // width: auto;
    // background-color: gray;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    .card {
        margin: 10px;
        width: 150px;
        height: 200px;
        padding: 20px;
        display: flex;
        flex-direction:column
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 1px 6px -2px #000;
        background-color: #FFF;
        margin-bottom: 30px;

        h1, h2 {
            color: lightgray;
        }
    }
`;
const DisplayData = (props) => {

    return (
        <Container>
        {props.players.map( (player) => {
                return (<div className='card'>
                        <h1>{player.name}</h1>
                        <h2>{player.country}</h2>
                    </div>
                )
            }
        )}
        </Container>
    )
}
export default DisplayData;