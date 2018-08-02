import React from 'react';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import FullCalendar from 'fullcalendar-reactwrapper';


const Calendar = props => (
            <div id="example-component">
                <FullCalendar
                    id="your-custom-ID"
                    header={{
                        left: 'prev,next',
                        center: 'false',
                        right: 'title',
                    }}
                    defaultDate={Date.now()}
                    navLinks={true} // can click day/week names to navigate views
                    editable={true}
                    eventLimit={true} // allow "more" link when too many events
                    events={props.events}  
                    contentHeight={'parent'}  
                    height={'auto'}     
                />
            </div>
        )

export default Calendar;