import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom'

function Detail() {
  const {id} = useParams();
  useEffect(()=>{
    
  },[])
  return (
    <Container>
      <Background>
        <img src="https://i.pinimg.com/736x/3d/c1/5d/3dc15d34a2a2deacb081e6a77e44e7ab.jpg" />
      </Background>
      <ImageTitle>
        <img src="/images/pixar-bao.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>

      </Controls>
      <SubTitle>
        2018 + 7m + Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        As a Disney enthusiast, I was fully dyin' over the spot-on and hilarious responses that made me look at my childhood faves in a new light.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position: relative;

`
const Background = styled.div`
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
      width: 100%;
      height:100%;
      object-fit:cover;
      margin-top:60px;
    }
`

const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
    img {
      width:100%;
      height:100%;
      object-fit:contain;
    }
`



const Controls = styled.div`
  display:flex;
  align-items:center;
`

const PlayButton = styled.button`
  border-radius:4px;
  font-size:15px;
  padding:0px 24px;
  margin-right:22px;
  display:flex;
  align-items:center;
  height:56px;
  background:rgb(249,249,249);
  border:none;
  letter-spacing:1.8px;
  cursor:pointer;

  &:hover{
    background:rgb(198,198,198)
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border:1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;
`
const AddButton = styled.button`
  margin-right:16px;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  background-color:rgba(0,0,0,0.6);
  cursor:pointer;
  border:2px solid white;



  span {
    font-size:30px;
    color:white;
  }
`

const GroupButton = styled(AddButton)`
  background:rgb(0,0,0);
`

const SubTitle = styled.div`
  color:rgb(249,249,249);
  font-size:15px;
  min-height:20px;
  margin-top:26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
    max-width:768px;
`