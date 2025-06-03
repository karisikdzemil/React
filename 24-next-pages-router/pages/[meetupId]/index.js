import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
      title="A Frist Meetup"
      address="Some Street 5, Some City"
      description="The Meetup Description"
    />
  );
}

export async function getStaticPaths () {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}
 
export async function getStaticProps (context) {

    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
                id: meetupId,
                title: "A Frist Meetup",
                address: "Some Street 5, Some City",
                description: "The Meetup Description",
            }
        }
    }
}

export default MeetupDetails;
