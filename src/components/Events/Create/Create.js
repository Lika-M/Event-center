import { EventForm } from '../../../common/EventForm/EventForm.js';

export const Create = () => {

    const title = 'Add Event';
    const btnName = 'Add';

    return <EventForm title={title} btnName={btnName}/>
}