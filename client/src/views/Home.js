import {useState} from 'react';
import {Container,Segment} from 'semantic-ui-react';
import ShowNotes from '../components/ShowNotes';
import EditNote from '../components/EditNote';
import Footer from '../components/Footer';

const Home = ()=>{
    const [update,setUpdate] = useState(false);
    const [darkMode,setDarkMode] = useState(false);

    return(
        <div className='ContainerWrapper'>
            <Container fluid style={{'height':'100vh'}}>
                <Segment.Group>
                    <ShowNotes update={update} setUpdate={setUpdate} darkMode={darkMode}/>
                    <Segment inverted={darkMode}>
                        <EditNote note={{title:'',body:''}} update={update} setUpdate={setUpdate} darkMode={darkMode}/>
                    </Segment>
                </Segment.Group>
            </Container>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    );
}

export default Home;