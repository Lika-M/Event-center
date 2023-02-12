import { EventForm } from '../EventForm/EventForm.js';

export const Create = () => {

    const title = 'Add Event';
    const btnName = 'ADD EVENT';

    return <EventForm title={title} btnName={btnName}/>
}