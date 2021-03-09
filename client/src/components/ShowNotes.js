import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Segment} from 'semantic-ui-react';
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
                    <Card 
                        key={note.id} 
                        raised
                        style={props.darkMode?
                            {'backgroundColor':'#333333','color':'white'}:
                            {'backgroundColor':'white','color':'black'}
                        }
                    >
                        <Card.Header as='h1'>{note.title}</Card.Header>
                        <Card.Meta style={{'color':'darkgrey'}} textAlign='center'>Created: {getDateTimeFormatted(note.createdat)}</Card.Meta>
                        <Card.Meta style={{'color':'darkgrey'}} textAlign='center'>Updated: {getDateTimeFormatted(note.updatedat)}</Card.Meta>
                        <Card.Content textAlign='left' style={{'fontSize':'Medium'}}>{note.body}</Card.Content>
                        <Segment inverted={props.darkMode}>
                            <EditNote note={note} update={update} setUpdate={setUpdate} darkMode={props.darkMode}/>
                            <DeleteNote note={note} update={update} setUpdate={setUpdate} darkMode={props.darkMode}/>
                        </Segment>
                    </Card>
                );
            });

            setNotes(data);
        }

        fetchData();
    
    },[update,setUpdate,props.darkMode]);

    return(
        <Segment inverted={props.darkMode}>
            <Card.Group centered itemsPerRow={4}>{notes}</Card.Group>
        </Segment>
    );
};

export default ShowNotes;