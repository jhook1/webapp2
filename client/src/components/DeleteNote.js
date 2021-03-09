import {useState} from 'react';
import axios from 'axios';
import {Button,Modal,Header} from 'semantic-ui-react';

const DeleteNote = (props)=>{
    const [open, setOpen] = useState(false);

    const handleClick = (e)=>{
        e.preventDefault();

        axios.delete(`/notes/noteid=${props.note.id}`)
            .catch(err=>console.error('error: ',err.message));

        props.setUpdate(!props.update);
        setOpen(false);
    }

    return(
        <Modal
            closeIcon
            open={open}
            trigger={
                <Button 
                    color='red' 
                    inverted={props.darkMode}
                    icon='trash' 
                    labelPosition='right' 
                    content='Delete'
                />
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header>Delete Note</Header>
            <Modal.Content>Are you sure you want to delete this note?</Modal.Content>
            <Modal.Actions>
                <Button 
                    color='blue'
                    onClick={()=>{setOpen(false)}} 
                    icon='ban' 
                    labelPosition='left' 
                    content='Cancel'
                />
                <Button
                    negative
                    icon='trash'
                    labelPosition='right' 
                    content='Yes, I want to delete'
                    onClick={handleClick}
                />
            </Modal.Actions>
        </Modal>
    );
}

export default DeleteNote;