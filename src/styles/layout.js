import styled from "styled-components";

// FlexCenter

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Section Margin

export const SectionMargin = styled.div`
  padding: 2rem 3rem;
  
  @media (max-width: 992px) {
    padding:0;
  }
`;

export const ProjectStyle = styled.div`
box-sizing: border-box;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  margin: 15px -15px;
  border-radius: 1rem;
  flex-direction: column;
  padding: 1rem 1rem 0;
  cursor: pointer;
  transition: all .3s; 
  overflow:hidden;
  position:relative;
  background: var(--secondary);
  
  &:before{
    content:"";
    overflow:hidden;
    position: absolute;
    top: 0; 
    left: 0;
    width: 125%; 
    height: 125%;
    background: url(${props => props.bg});
    background-size:cover;
    background-repeat: no-repeat;
    filter: brightness(50%) opacity(50%) blur(5px);
  }

  &:hover:before{
    width: 115%; 
    height: 115%;
    filter: brightness(100%) opacity(100%) blur(0px);  
    transition: all .3s;
  }

  :hover {
    h3{
      font-size: 2rem;
      transition: all .3s;
    }
    box-shadow: 0 0 25px rgb(94,94,94,.75);
    text-shadow: 0 0 15px rgb(0,0,0,.9);
    transition: all .3s;
  }
`;