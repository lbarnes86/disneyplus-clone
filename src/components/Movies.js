import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=400&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=400&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=400&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=400&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
               
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`