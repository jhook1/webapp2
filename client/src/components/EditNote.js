import {useState} from 'react';
import axios from 'axios';
import {Form,Button,Modal,Header,Input,TextArea} from 'semantic-ui-react';

const ReadNote = (props)=>{
    const [open, setOpen] = useState(false);
    const [formData,setFormData] = useState({
        title: props.note.title,
        body: props.note.body
    });

    const handleSave = (e)=>{
        e.preventDefault();

        if(props.note.id){
            axios.post(`/notes/noteid=${props.note.id}`,formData)
                .catch(err=>console.error('error: ',err.message));
        }
        else{
            axios.post("/notes",formData)
                .catch(err=>console.error('error: ',err.message));

            setFormData({title:'',body:''});
        }


        props.setUpdate(!props.update);
        setOpen(false);
    }

    const handleCancel = (e)=>{
        setFormData({
            title: props.note.title,
            body: props.note.body
        });

        setOpen(false);
    }

    const handleChange = (e)=>{
        let name = e.target.name;
        let val = e.target.value;

        setFormData({...formData,[name]: val});
    }

    return(
        <Modal
            closeIcon
            open={open}
            trigger={
                <Button 
                    positive={!props.note.id}
                    inverted={props.darkMode}
                    color={props.note.id?'blue':'green'} 
                    icon={props.note.id?'edit':'plus'} 
                    labelPosition='left' 
                    content={props.note.id?'Edit':'New'}
                />
            }
            onClose={handleCancel}
            onOpen={() => setOpen(true)}
        >
            <Header>Edit Note</Header>
            <Modal.Content>
                <Form>
                    <Form.Field
                        control={Input} 
                        name='title'
                        label='Title'
                        placeholder='Title...'
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <Form.Field 
                        control={TextArea}
                        style={{ minHeight: 100 }}
                        name='body'
                        label='Note'
                        placeholder='Note goes here...'
                        value={formData.body}
                        onChange={handleChange}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button 
                    negative 
                    onClick={handleCancel} 
                    icon='ban' 
                    labelPosition='left' 
                    content='Cancel'
                />
                <Button 
                    positive 
                    onClick={handleSave} 
                    icon='save' 
                    labelPosition='right' 
                    content='Save'
                />
            </Modal.Actions>
        </Modal>
    );
}

export default ReadNote;