import {Segment,Button} from 'semantic-ui-react';

const Footer = (props)=>{
    return(
        <Segment inverted={props.darkMode}>
            <Button 
                inverted={props.darkMode}
                icon='sun' 
                color='yellow'
                onClick={()=>{props.setDarkMode(!props.darkMode)}} 
                content='Toggle Dark Mode'
            />
        </Segment>
    );
    
};

export default Footer;