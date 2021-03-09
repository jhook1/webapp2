import {useState} from 'react';
import {Container,Segment,Button} from 'semantic-ui-react';
import ShowNotes from '../components/ShowNotes';
import EditNote from '../components/EditNote';
import './Home.css';

const Home = ()=>{
    const [update,setUpdate] = useState(false);
    const [darkMode,setDarkMode] = useState(false);

    return(
        <div className='ContainerWrapper'>
            <Container fluid style={{'height':'100%','backgroundColor':'#222222'}}>
                <Segment.Group>
                    <ShowNotes update={update} setUpdate={setUpdate} darkMode={darkMode}/>
                    <Segment inverted={darkMode}>
                        <EditNote note={{title:'',body:''}} update={update} setUpdate={setUpdate} darkMode={darkMode}/>
                    </Segment>
                    <Segment inverted={darkMode}>
                        <Button 
                            inverted={darkMode}
                            icon='sun' 
                            color='yellow'
                            onClick={()=>{setDarkMode(!darkMode)}} 
                            content='Toggle Dark Mode'
                        />
                    </Segment>
                </Segment.Group>
            </Container>
        </div>
    );
}

export default Home;