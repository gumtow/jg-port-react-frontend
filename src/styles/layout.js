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
    background-size:100%;
    filter: brightness(50%) opacity(30%) blur(20px);
  }

  &:hover:before{
    width: 115%; 
    height: 115%;
    filter: brightness(100%) opacity(70%) blur(0px);  
    transition: all .3s;
  }

  :hover {
    box-shadow: 0 0 25px rgb(94,94,94,.75);
    transition: all .3s;
  }
  
`;