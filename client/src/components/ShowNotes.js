import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Segment,Button} from 'semantic-ui-react';
import getDateTimeFormatted from '../utility/getDateTimeFormatted';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';

const ShowNotes = (props)=>{
    const [notes,setNotes] = useState([]);
    const update = props.update;
    const setUpdate = props.setUpdate;

    useEffect(()=>{
        const fetchData = async () => {
            let data = await axios.get("/notes")
                .catch(err=>console.error('error: ',err.message));

            data = data.data.map((note)=>{
                return(
                    <Card key={note.id} raised color='blue' className='note card'>
                        <Card.Header as='h1'>{note.title}</Card.Header>
                        <Card.Meta textAlign='center'>Created: {getDateTimeFormatted(note.createdat)}</Card.Meta>
                        <Card.Meta textAlign='center'>Updated: {getDateTimeFormatted(note.updatedat)}</Card.Meta>
                        <Card.Content textAlign='left' style={{'font-size':'Medium'}}>{note.body}</Card.Content>
                        <Segment>
                            <Button.Group>
                                <EditNote note={note} update={update} setUpdate={setUpdate}/>
                                <DeleteNote note={note} update={update} setUpdate={setUpdate}/>
                            </Button.Group>
                        </Segment>
                    </Card>
                );
            });

            setNotes(data);
        }

        fetchData();
    
    },[update,setUpdate]);

    return(
        <Segment>
            <Card.Group centered itemsPerRow={4}>{notes}</Card.Group>
        </Segment>
    );
};

export default ShowNotes;