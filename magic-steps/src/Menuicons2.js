import React from "react";
import './Menuicons.css'; 
import styled from 'styled-components';

const IconWrapper = styled.div`
  color: ${ props => props.flagHover === true ? 'red' : 'black'}
`

const LabelName = styled.div`
color: ${ props => props.flagHover === true ? 'red' : 'black'}
`

function Menuicons2({name, icon, isHovered}) {
  return (
    <div className="MenuList2">
        <IconWrapper flagHover={isHovered}>  {icon} </IconWrapper>
        <LabelName  flagHover={isHovered}> {name}</LabelName>
    </div>
  ); 
}
export default  Menuicons2; 