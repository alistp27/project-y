// dalil estefade az macro in hast ke dar file html moghe debug kardan esm component ro minevise va peyda kardanesh ason tar mishe. hamchenin nam gozary ha agar yeksan bashe ba tagi ke akhar esm har component mindaze dige style ye component dige roye component fely nemiofte(albate ke esm yeksan eshtebah hast vali dar halate koli goftam)

import styled from 'styled-components/macro'

export const MoreUserInfo = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
align-content: center;
height: 300px;
width: 310px;
top: 0;
right: 0;
position: absolute;
justify-content: center;
background-color:white;
border-radius:0 10px 10px 0;
opacity:1;
padding:20px;
transition:all 0.5s ease;

`

// chon man vaght kami dar dastres dashtam va mikhastam sari tar file ro braton befrestam marhaleye hover ro ba estefade az opacity dorostesh kardam(tasalote khobi roye animationi ke dorost karde bodin ham nadashtam)
export const CardContainer = styled.div`
display: flex;
background-color: #92bCa6;
margin: auto;
width: 450px;
margin-top: 100px;
padding: 25px;
border-radius: 10px;
height:300px;
position:relative;
&:hover ${MoreUserInfo}{
    opacity:0;
}
`;
export const ProfileSection = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color:white;

}
`
export const Level = styled.h5`
background-color: rgba(0,0,0,0.2);
padding: 10px;
border-radius: 10px;
`
export const ProfileImg = styled.img`
width : 100px;
border-radius : 50px;
border:2px solid #104d2d;
`;

// khobi style components in hast ke jeloye copy paste ezafi ra migirad , ba estefade az styled mishe az style ghabli estefade kard
export const Points = styled(Level)``
export const ProfileAchievment = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-content: center;
align-items: stretch;
padding:15px;
position: absolute;
top: 0;
right: 0;
width: 310px;
height:300px;
border-radius:0 10px 10px 0;
color: #325C46;
`
export const UserHover = styled.h3``
export const Coords = styled.div`
display: flex;
justify-content: space-between;
`
export const Achievements = styled.div`
display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    margin-top:10px;
`
export const AchivmentNode = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
`
export const NodeText = styled.h4`
font-size:20px`

export const UserName = styled(UserHover)`
margin-bottom: 15px;
`
export const UserMoreInfo = styled.p``
export const Detail = styled.h6`
position: absolute;
    bottom: 10px;
    right: 10px;
    font-weight: bold;
    font-size:12px;
`

