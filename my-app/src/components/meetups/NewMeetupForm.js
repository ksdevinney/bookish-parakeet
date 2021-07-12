import { useRef } from 'react';
import React from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = (props) => {
    // refs for form data
const titleInputRef = useRef();
const imageInputRef = useRef();
const addressInputRef = useRef();
const descInputRef = useRef();

function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    // object of form data
    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDesc,
    };

    props.onAddMeetup(meetupData);
}
    // form
    return (
        <Card>
            <form className={classes.form}onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea type='text' required rows='5' id='description' ref={descInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
