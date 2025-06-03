import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup!",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    address: "Some address 5, 12345 Some City",
    deskription: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup!",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    address: "Some address 5, 12345 Some City",
    deskription: "This is a Second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps () {
    return {
        props: { meetups: DUMMY_MEETUPS}
    }
}
export default HomePage;
