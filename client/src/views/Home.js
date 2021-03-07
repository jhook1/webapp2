import {useState} from 'react';
import {Container} from 'semantic-ui-react';
import ShowNotes from '../components/ShowNotes';
import EditNote from '../components/EditNote';

const Home = ()=>{
    const [update,setUpdate] = useState(false);

    return(
        <Container fluid>
            <ShowNotes update={update} setUpdate={setUpdate}/>
            <EditNote note={{title:'',body:''}} update={update} setUpdate={setUpdate}/>
        </Container>
    );
}

export default Home;