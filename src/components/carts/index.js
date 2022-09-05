import React from 'react'
import {CardContainer,ProfileSection,Level,ProfileImg,Points,ProfileAchievment,UserHover,Coords,Achievements,AchivmentNode,NodeText,MoreUserInfo,UserName,UserMoreInfo,Detail} from './styles/style'
// hamchenin az react-icons fontAwesome estefade kardam baraye icon ha
import {FaUsers,FaTrophy,FaGamepad,FaCoffee} from "react-icons/fa";
export function CartsComponent (){
    return(
        <>
        {/* man omadam inja az inline-style ha estefade kardam ta az tekrar shodan component haye ezafi jelo giri konam  */}
        <CardContainer style={{backgroundColor:"#dE685E"}}>
            <ProfileSection style={{backgroundColor:"#dE685E"}}>
                <Level>LEVEL 13</Level>
                <ProfileImg src={'/profileimg/9469689.jpg'} alt="profile image" style={{border:"2px solid #690d05"}} />
                <Points>5310 POINTS</Points>
            </ProfileSection>
            <ProfileAchievment style={{color:"#fff"}}>
                <UserHover>John Smith</UserHover>
                <Coords>
                    <span>Group Name</span>
                    <span>Joined January 2019</span>
                </Coords>
                <Coords >
                    <span>Position/Role</span>
                    <span>City, Country</span>
                </Coords>
                <Achievements>
                    <AchivmentNode>
                        AWARDS
                        <FaTrophy size = "20px"/>
                        <NodeText>2</NodeText>
                    </AchivmentNode>
                    <AchivmentNode>
                        MATCHES
                        <FaGamepad size = "20px"/>
                        <NodeText>33</NodeText>
                    </AchivmentNode>
                    <AchivmentNode>
                        PALS
                        <FaUsers size = "20px"/>
                        <NodeText>90</NodeText>
                    </AchivmentNode>
                    <AchivmentNode>
                        COFFEE
                        <FaCoffee size = "20px"/>
                        <NodeText>∞</NodeText>
                    </AchivmentNode>
                </Achievements>
            </ProfileAchievment>
            <MoreUserInfo>
                <UserName>John Smith</UserName>
                <UserMoreInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia ligula ac mauris lacinia commodo. Praesent consectetur lectus id tortor imperdiet, a ullamcorper orci porta. Aliquam fringilla sem sit amet mauris imperdiet
                </UserMoreInfo>
                <Detail>Mouse over for more information.</Detail>
            </MoreUserInfo>
        </CardContainer>

        {/* dar vaghe hamontor ke moshakhase yek component ra dobar estefade kardam */}
        <CardContainer>
        <ProfileSection>
            <Level>LEVEL 13</Level>
            <ProfileImg src={'/profileimg/9469689.jpg'} alt="profile image" />
            <Points>5310 POINTS</Points>
        </ProfileSection>
        <ProfileAchievment>
            <UserHover>John Smith</UserHover>
            <Coords>
                <span>Group Name</span>
                <span>Joined January 2019</span>
            </Coords>
            <Coords >
                <span>Position/Role</span>
                <span>City, Country</span>
            </Coords>
            <Achievements>
                <AchivmentNode>
                    AWARDS
                    <FaTrophy size = "20px"/>
                    <NodeText>2</NodeText>
                </AchivmentNode>
                <AchivmentNode>
                    MATCHES
                    <FaGamepad size = "20px"/>
                    <NodeText>33</NodeText>
                </AchivmentNode>
                <AchivmentNode>
                    PALS
                    <FaUsers size = "20px"/>
                    <NodeText>90</NodeText>
                </AchivmentNode>
                <AchivmentNode>
                    COFFEE
                    <FaCoffee size = "20px"/>
                    <NodeText>∞</NodeText>
                </AchivmentNode>
            </Achievements>
        </ProfileAchievment>
        <MoreUserInfo>
            <UserName>John Smith</UserName>
            <UserMoreInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia ligula ac mauris lacinia commodo. Praesent consectetur lectus id tortor imperdiet, a ullamcorper orci porta. Aliquam fringilla sem sit amet mauris imperdiet
            </UserMoreInfo>
            <Detail>Mouse over for more information.</Detail>
        </MoreUserInfo>
    </CardContainer>
    </>
    )
}