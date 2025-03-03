import { styled } from "styled-components"
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import MyImage from '../images/Image1-prettypink.png'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fffafa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;  
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Image = styled.img`
    height: 80%;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src={MyImage}/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE!</Title>
            <Desc>DON'T COMPROMISE ON PRICE! GET FLAT 30% OFF ALL NEW ARRIVALS!</Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src={MyImage}/>
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE!</Title>
            <Desc>DON'T COMPROMISE ON PRICE! GET FLAT 30% OFF ALL NEW ARRIVALS!</Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f">
          <ImgContainer>
            <Image src={MyImage}/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE!</Title>
            <Desc>DON'T COMPROMISE ON PRICE! GET FLAT 30% OFF ALL NEW ARRIVALS!</Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider